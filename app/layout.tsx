import { PropsWithChildren } from "react";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title:"Cobalt",
//   openGraph:{
//     title:"Cobalt is an example project",
//     description:"An example project using Next.js",
// images:{
//   url:"/image.png",
//    width:1200,
//     height:628, 
// },

//   }
// };




export const metadata: Metadata = {
  title: "Cobalt — Everything About The Essential Metal",
  description:
    "Discover the power, history, and future of cobalt. Learn why cobalt is critical for batteries, renewable energy, and modern technology.",
  openGraph: {
    title: "Cobalt — The Essential Metal Powering The Future",
    description:
      "Explore the fascinating world of cobalt. From its role in clean energy to cutting-edge technology, Cobalt is your guide to this powerful metal.",
    images: {
      url: "cobalt1-delta.vercel.app",
      width: 1200,
      height: 628,
    },
  },
};


const RootLayout = (props: PropsWithChildren  ) => { 
  return <html>
      <body>
        {props.children}
      </body>
    </html>
 };


export default RootLayout;
