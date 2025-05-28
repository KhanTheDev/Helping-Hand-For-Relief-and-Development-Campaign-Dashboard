import { GraphQLFormattedError } from "graphql";

type CustomError = {
    message: string;
    statusCode: string | number;
};

const customFetch = async (url: string, options: RequestInit) => {
    const accessToken = localStorage.getItem("access_token");
    const headers = {
        ...(options.headers as Record<string, string>),
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        "Apollo-Require-Preflight": "true",
    };

    return fetch(url, {
        ...options,
        headers,
    });
};

const getGraphQLErrors = (
    body: Record<"errors", GraphQLFormattedError[] | undefined>
): CustomError | null => {
    if (!body) {
        return {
            message: "Unknown error",
            statusCode: "INTERNAL_SERVER_ERROR",
        };
    }

    if ("errors" in body) {
        const errors = body.errors;

        const messages = errors?.map((error) => error?.message)?.join(" | ");
        const code = errors?.[0]?.extensions?.code;

        return {
            message: messages || JSON.stringify(errors),
            statusCode: code || 500,
        };
    }

    return null;
};

export const fetchWrapper = async (url: string, options: RequestInit) => {
    const response = await customFetch(url, options);

    const body = await response.clone().json().catch(() => null);
    const error = body ? getGraphQLErrors(body) : null;

    if (error) {
        throw error;
    }

    return response;
};
