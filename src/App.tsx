import { Refine, GitHubBanner } from "@refinedev/core";
import {
  ThemedLayoutV2,
  ThemedSiderV2,
  useNotificationProvider,
} from "@refinedev/antd";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import "@refinedev/antd/dist/reset.css";

import { App as AntdApp } from "antd";

import { authProvider, dataProvider, liveProvider } from "./provider";

function App() {
  return (
    <>
      <GitHubBanner />
      <RefineKbarProvider>
        <AntdApp>
          <DevtoolsProvider>
            <Refine
              dataProvider={dataProvider}
              liveProvider={liveProvider}
              authProvider={authProvider}
              notificationProvider={useNotificationProvider}
              resources={[]} // You can keep this empty for now
              options={{
                projectId: "zYI5jM-cIO4vx-4yYwae",
                liveMode: "auto",
              }}
            >
              <ThemedLayoutV2
                Sider={(props) => <ThemedSiderV2 {...props} fixed />}
              >
                <div style={{ padding: 24 }}>
                  <h1>🚧 Routing Disabled</h1>
                  <p>
                    This is a temporary layout while routing is removed. Once you install{" "}
                    <code>react-router-dom</code>, you can add routes and navigation back.
                  </p>
                </div>
              </ThemedLayoutV2>

              <RefineKbar />
              <DevtoolsPanel />
            </Refine>
          </DevtoolsProvider>
        </AntdApp>
      </RefineKbarProvider>
    </>
  );
}

export default App;
