import { Store } from "@reduxjs/toolkit/react"
import * as queries from "@testing-library/dom/types/queries"
import { render, RenderOptions } from "@testing-library/react"
import { ReactElement, ReactNode } from "react"
import { Provider } from "react-redux"
import configureStore from "redux-mock-store"
import { PersistGate } from "redux-persist/lib/integration/react"
import { ThemeProvider } from "styled-components"

import { ErrorBoundary } from "@/components/ErrorBoundary/ErrorBoundary"
import { darkTheme, lightTheme } from "@/constants/theme"
import { persistor } from "@/store"
import { GlobalStyles } from "@/styles/globalStyles"

const mockStoreFn = configureStore()

export const mockStore: Store = mockStoreFn({
  theme: "dark",
})

function Providers({ children, store }: { children: ReactNode; store: Store }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary>
          <GlobalStyles />
          {children}
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  )
}

const ProdiverWithTheme = (store: Store) =>
  function ({ children }: { children: ReactNode }) {
    return (
      <Providers store={store}>
        <ThemeProvider theme={store.getState().theme === "dark" ? darkTheme : lightTheme}>
          {children}
        </ThemeProvider>
      </Providers>
    )
  }

const renderWithWrappers = (
  ui: ReactElement,
  options?: RenderOptions<typeof queries, HTMLElement, HTMLElement>,
) => render(ui, { wrapper: ProdiverWithTheme(mockStore), ...options })

export * from "@testing-library/react"

export { renderWithWrappers }
