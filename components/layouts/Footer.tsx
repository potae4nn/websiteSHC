import React from "react";
import Googlemap from "../../pages/googlemap";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div>
      <h2 className="text-4xl mt-10 mb-6 text-center font-medium">
        ข้อมูลการติดต่อ
      </h2>
      <div className="grid justify-items-center bg-stone-200 sm:grid-cols-1 sm:text-center lg:text-left lg:grid-cols-2 gap-4 p-5">
        <div className="flex flex-col align-center">
          <h3 className="text-2xl text-center font-medium">
            facebook สถานกีฬาและสุขภาพ มหาวิทยาลัยเทคโนโลยีสุรนารี
          </h3>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/SUTSportandHealthCentre&tabs=timeline&width=340&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="340"
            height="300"
            style={{ border: "none", overflow: "hidden",alignItems:"center" }}
            scrolling="no"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="flex flex-col align-center">
          <h3 className="text-2xl font-medium text-center"> การเดินทาง</h3>
          <Googlemap />
        </div>
      </div>

      <div className="grid bg-stone-300 sm:grid-cols-1 sm:text-center lg:text-left lg:grid-cols-3 gap-4 p-5">
        <div>
          <h3 className="text-2xl font-medium">
            ติดต่อ สถานกีฬาและสุขภาพ มหาวิทยาลัยเทคโนโลยีสุรนารี
          </h3>
          อาคารสุรเริงไชย เลขที่ 111 มหาวิทยาลัยเทคโนโลยีสุรนารี ถ.มหาวิทยาลัย
          ต.สุรนารี อ.เมือง จ.นครราชสีมา 30000
        </div>
        <div>
          <h3 className="text-2xl font-medium"> ข้อมูลการติดต่อ</h3>
          e-Mail : sport@sut.ac.th <br /> โทรสาร : 044-223420
        </div>
        <div>
          <h3 className="text-2xl font-medium">โทรศัพท์ติดต่อ</h3>
          โทรศัพท์ : 044-223427
        </div>
      </div>
    </div>
  );
}
