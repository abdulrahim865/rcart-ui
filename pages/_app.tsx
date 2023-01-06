import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment, useState } from "react";
import { AppHead, MainFooter, MainHeader } from "../components";

import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import AdminLeftTabsHeader from "../components/admin/AdminSidebar";

export default function App({ Component, pageProps }: AppProps) {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  const router = useRouter();
  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      <Fragment>
        <AppHead />
        <Component {...pageProps} />
        {!router.pathname.includes("admin") ? (
          <Fragment>
            <MainHeader />
            <MainFooter />
          </Fragment>
        ) : (
          <AdminLeftTabsHeader />
        )}
      </Fragment>
    </SessionContextProvider>
  );
}
