import Head from "next/head";
import { useCallback } from "react";
import { useSiteSettings } from "~/utils/store";
import { VisibilityModeButton } from '~/components'

export default function Home() {

  const {
    mode
  } = useSiteSettings(
      useCallback((state) => ({
          mode: state.visibilityMode
      }), [])
  )


  return (
    <>
      <Head>
        <title>you've got to be f**king kidding me</title>
        <meta name="description" content="lol lmao lolz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={
        `w-full h-[100vh] overlflow-hidden ${mode === 'light' ? 'bg-[#ECF0F1] text-[#212121]' : 'bg-[#212121] text-[#ECF0F1]'}`
      }>
         <div className="grid grid-cols-8">
            <div className="col-span-7"/>
            <div className="flex justify-center items-center my-6">
              <VisibilityModeButton />
            </div>
          </div>
        <div className="flex flex-col w-full h-2/3 items-center justify-center">
         
          <div className="flex flex-col h-fit">
           
            <h1 className="text-center text-[10vmin]">here's what i think</h1>
              <div className="flex items-center justify-center w-full h-full">
                <iframe className="w-full h-[200px] md:h-[400px]" src="https://www.youtube.com/embed/eX1pWJMVlE4?si=HgA8Ko9AHCihI-iA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
          </div>
        </div>
      </main>
    </>
  );
}
