import Link from "next/link";
import c from "./index.module.css";
import { AiOutlineDoubleRight } from "react-icons/ai";
import ImageLoader from "@/Component/ImageLoader";

export default function CategoryPage() {
  return (
    <>
      <div style={{ marginTop: "100px" }}> </div>
      <div className="section-space">
        <div className="custom_container">
          <div className={c.innerNav}>
            <div className={c.inner1}>
              {" "}
              Home <AiOutlineDoubleRight />
            </div>
            <div className={c.inner1}> Category: "Technology"</div>
          </div>

          <h2 className={c.catTitle}>Technology</h2>

          <div className={`row ${c.borderBottom}`}>
            <div className={`col-lg-8 col-md-8 ${c.leftPadding}`}>
              <div className={`row my-4 ${c.divider}`}>
                <div className="col-lg-6 col-md-6">
                  <Link href="#" className={c.heading}>
                    U.S. Warns Financial Institutions to be on Watch for Russian
                    Sanctions
                  </Link>
                  <div className={c.dateContainer}>
                    <div>
                      <Link className={c.tag} href="#">
                        Technology
                      </Link>{" "}
                      <span className={c.date}>- AUG 11, 2024</span>
                    </div>
                  </div>

                  <p className={c.mainBody}>
                    To understand the new politics stance and other pro
                    nationals of recent times, we should look to Silicon Valley
                    and the quantified movement of…
                  </p>

               <Link className={c.readMoreBtn} href="#">
                    Read More
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className={c.hImage}>
                    <ImageLoader
                      width={696}
                      height={464}
                      src="breaking-001.jpg"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className={`row ${c.dividerRight}`}>
                    <div className={`col-lg-8 col-md-8`}>
                      <Link href="#" className={c.innerTitle}>
                        Everything You Need to Know About Personal Finance:
                      </Link>

                      <div className={c.dateContainer}>
                        <div>
                          <Link className={c.tag} href="#">
                            Technology
                          </Link>{" "}
                          <span className={c.date}>- AUG 11, 2024</span>
                        </div>
                      </div>

                      <p className={c.innerBody}>
                        To understand the new politics stance and other pro
                        nationals…
                      </p>
                    </div>

                    <div className="col-lg-4 col-md-4">
                      <div className={c.imgLit}>
                        <ImageLoader
                          width={696}
                          height={464}
                          src="breaking-001.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className={`row ${c.dividerLeft}`}>
                    <div className={`col-lg-8 col-md-8`}>
                      <Link href="#" className={c.innerTitle}>
                        Everything You Need to Know About Personal Finance:
                      </Link>

                      <div className={c.dateContainer}>
                        <div>
                          <Link className={c.tag} href="#">
                            Technology
                          </Link>{" "}
                          <span className={c.date}>- AUG 11, 2024</span>
                        </div>
                      </div>

                      <p className={c.innerBody}>
                        To understand the new politics stance and other pro
                        nationals…
                      </p>
                    </div>

                    <div className="col-lg-4 col-md-4">
                      <div className={c.imgLit}>
                        <ImageLoader
                          width={696}
                          height={464}
                          src="breaking-001.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className={c.ctInnerLeft}>
                <div className="row">
                    <div className="col-lg-4">
                        <div className={c.ctImgContainer}>
                        <ImageLoader
                          width={696}
                          height={464}
                          src="breaking-001.jpg"
                        />
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className={c.txtContainerCt}>
                            <div className={c.heading2}>The Global Economic System is in Dire Need of an Overhaul</div>
                            <div className={c.dateContainer}>
                    <div>
                      <Link className={c.tag} href="#">
                        Technology
                      </Link>{" "}
                      <span className={c.date}>- AUG 11, 2024</span>
                    </div>
                  </div>

                  <p>
                  To understand the new politics stance and other pro nationals of recent times, we should…
                  </p>

                        </div>
                    </div>
                </div>
              </div> */}
            </div>

            <div className={`col-lg-4 col-md-4 my-4 ${c.paddingSidebar}`}>
              <div className={c.rightSideImg}>
                <ImageLoader width={696} height={464} src="breaking-001.jpg" />
              </div>
              <Link href="#" className={c.innerTitle2}>
                Man You Need to Know About Personal Finance:
              </Link>

              <div className={c.dateContainer}>
                <div>
                  <Link className={c.tag} href="#">
                    Technology
                  </Link>{" "}
                  <span className={c.date}>- AUG 11, 2024</span>
                </div>
              </div>

              <div className="my-4">
                <div className={c.slFlex}>
                  <div className={c.sideTextContainer}>
                    <Link href="#" className={c.innerTitle2}>
                      Bitcoin Boom or Crypto Winter? Some New Technical...
                    </Link>

                    <div className={c.sdate}>AUG 11, 2023</div>
                  </div>

                  <div className={c.slImg}>
                    <ImageLoader
                      width={696}
                      height={464}
                      src="breaking-001.jpg"
                    />
                  </div>
                </div>

                <div className={c.slFlex2}>
                  <div className={c.sideTextContainer}>
                    <Link href="#" className={c.innerTitle2}>
                      Bitcoin Boom or Crypto Winter? Some New Technical...
                    </Link>

                    <div className={c.sdate}>AUG 11, 2023</div>
                  </div>

                  <div className={c.slImg}>
                    <ImageLoader
                      width={696}
                      height={464}
                      src="breaking-001.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`row ${c.ctBelow}`}>
            <div className="col-lg-8 col-md-8">
              <div className={c.ctInnerLeft}>
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className={c.ctImgContainer}>
                      <ImageLoader
                        width={696}
                        height={464}
                        src="breaking-001.jpg"
                      />
                    </div>
                  </div>

                  <div className="col-lg-8 col-md-8">
                    <div className={c.txtContainerCt}>
                      <div className={c.heading2}>
                        The Global Economic System is in Dire Need of an
                        Overhaul
                      </div>
                      <div className={c.dateContainer}>
                        <div>
                          <Link className={c.tag} href="#">
                            Technology
                          </Link>{" "}
                          <span className={c.date}>- AUG 11, 2024</span>
                        </div>
                      </div>

                      <p className={c.para}>
                        To understand the new politics stance and other pro
                        nationals of recent times, we should…
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={c.ctInnerLeft2}>
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className={c.ctImgContainer}>
                      <ImageLoader
                        width={696}
                        height={464}
                        src="breaking-001.jpg"
                      />
                    </div>
                  </div>

                  <div className="col-lg-8 col-md-8">
                    <div className={c.txtContainerCt}>
                      <div className={c.heading2}>
                        The Global Economic System is in Dire Need of an
                        Overhaul
                      </div>
                      <div className={c.dateContainer}>
                        <div>
                          <Link className={c.tag} href="#">
                            Technology
                          </Link>{" "}
                          <span className={c.date}>- AUG 11, 2024</span>
                        </div>
                      </div>

                      <p className={c.para}>
                        To understand the new politics stance and other pro
                        nationals of recent times, we should…
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={c.ctInnerLeft2}>
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className={c.ctImgContainer}>
                      <ImageLoader
                        width={696}
                        height={464}
                        src="breaking-001.jpg"
                      />
                    </div>
                  </div>

                  <div className="col-lg-8 col-md-8">
                    <div className={c.txtContainerCt}>
                      <div className={c.heading2}>
                        The Global Economic System is in Dire Need of an
                        Overhaul
                      </div>
                      <div className={c.dateContainer}>
                        <div>
                          <Link className={c.tag} href="#">
                            Technology
                          </Link>{" "}
                          <span className={c.date}>- AUG 11, 2024</span>
                        </div>
                      </div>

                      <p className={c.para}>
                        To understand the new politics stance and other pro
                        nationals of recent times, we should…
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={c.ctInnerLeft2}>
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className={c.ctImgContainer}>
                      <ImageLoader
                        width={696}
                        height={464}
                        src="breaking-001.jpg"
                      />
                    </div>
                  </div>

                  <div className="col-lg-8 col-md-8">
                    <div className={c.txtContainerCt}>
                      <div className={c.heading2}>
                        The Global Economic System is in Dire Need of an
                        Overhaul
                      </div>
                      <div className={c.dateContainer}>
                        <div>
                          <Link className={c.tag} href="#">
                            Technology
                          </Link>{" "}
                          <span className={c.date}>- AUG 11, 2024</span>
                        </div>
                      </div>

                      <p className={c.para}>
                        To understand the new politics stance and other pro
                        nationals of recent times, we should…
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={c.ctInnerLeft2}>
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className={c.ctImgContainer}>
                      <ImageLoader
                        width={696}
                        height={464}
                        src="breaking-001.jpg"
                      />
                    </div>
                  </div>

                  <div className="col-lg-8 col-md-8">
                    <div className={c.txtContainerCt}>
                      <div className={c.heading2}>
                        The Global Economic System is in Dire Need of an
                        Overhaul
                      </div>
                      <div className={c.dateContainer}>
                        <div>
                          <Link className={c.tag} href="#">
                            Technology
                          </Link>{" "}
                          <span className={c.date}>- AUG 11, 2024</span>
                        </div>
                      </div>

                      <p className={c.para}>
                        To understand the new politics stance and other pro
                        nationals of recent times, we should…
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={c.ctInnerLeft2}>
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className={c.ctImgContainer}>
                      <ImageLoader
                        width={696}
                        height={464}
                        src="breaking-001.jpg"
                      />
                    </div>
                  </div>

                  <div className="col-lg-8 col-md-8">
                    <div className={c.txtContainerCt}>
                      <div className={c.heading2}>
                        The Global Economic System is in Dire Need of an
                        Overhaul
                      </div>
                      <div className={c.dateContainer}>
                        <div>
                          <Link className={c.tag} href="#">
                            Technology
                          </Link>{" "}
                          <span className={c.date}>- AUG 11, 2024</span>
                        </div>
                      </div>

                      <p className={c.para}>
                        To understand the new politics stance and other pro
                        nationals of recent times, we should…
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={c.ctInnerLeft2}>
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className={c.ctImgContainer}>
                      <ImageLoader
                        width={696}
                        height={464}
                        src="breaking-001.jpg"
                      />
                    </div>
                  </div>

                  <div className="col-lg-8 col-md-8">
                    <div className={c.txtContainerCt}>
                      <div className={c.heading2}>
                        The Global Economic System is in Dire Need of an
                        Overhaul
                      </div>
                      <div className={c.dateContainer}>
                        <div>
                          <Link className={c.tag} href="#">
                            Technology
                          </Link>{" "}
                          <span className={c.date}>- AUG 11, 2024</span>
                        </div>
                      </div>

                      <p className={c.para}>
                        To understand the new politics stance and other pro
                        nationals of recent times, we should…
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`col-lg-4 col-md-4 ${c.paddingSidebar}`}>
                <div className={c.ep}>Editors Picks</div>   

                <div className={c.epContainer}>
                    <div className={c.epImg1}>
                    <ImageLoader
                        width={696}
                        height={464}
                        src="breaking-001.jpg"
                     /> 
                    </div>

                    <div className={c.epText}>
                        <Link href="#" className={c.epbody}>
                        Review: Record Shares of Voters Turned Out for 2020 election
                        </Link>
                        <p className={c.sdate}>AUG 11, 2023</p>
                    </div>
                </div>

                <div className={c.epContainer2}>
                    <div className={c.epImg1}>
                    <ImageLoader
                        width={696}
                        height={464}
                        src="breaking-001.jpg"
                     /> 
                    </div>

                    <div className={c.epText}>
                        <Link href="#" className={c.epbody}>
                        Review: Record Shares of Voters Turned Out for 2020 election
                        </Link>
                        <p className={c.sdate}>AUG 11, 2023</p>
                    </div>
                </div>

                <div className={c.epContainer2}>
                    <div className={c.epImg1}>
                    <ImageLoader
                        width={696}
                        height={464}
                        src="breaking-001.jpg"
                     /> 
                    </div>

                    <div className={c.epText}>
                        <Link href="#" className={c.epbody}>
                        Review: Record Shares of Voters Turned Out for 2020 election
                        </Link>
                        <p className={c.sdate}>AUG 11, 2023</p>
                    </div>
                </div>

                <div className={c.epContainerLast}>
                    <div className={c.epImg1}>
                    <ImageLoader
                        width={696}
                        height={464}
                        src="breaking-001.jpg"
                     /> 
                    </div>

                    <div className={c.epText}>
                        <Link href="#" className={c.epbody}>
                        Review: Record Shares of Voters Turned Out for 2020 election
                        </Link>
                        <p className={c.sdate}>AUG 11, 2023</p>
                    </div>
                </div>

                <div className={c.ep}>Latest Posts</div> 

             <div className={c.lpContainer}>
             <div className={c.lpImg}>
                <ImageLoader
                        width={696}
                        height={464}
                        src="breaking-001.jpg"
                     /> 
                </div> 

                <div className={c.txtContainer}>
                    <div className={c.num}> 1 </div>
                    <div>
                        <div className={c.lpTitle}>Queen Elizabeth the Last! Monarchy Faces Fresh Demand to be Axed</div>
                        <p className={c.sdate}>AUG 11, 2023</p>
                    </div>
                </div>
            </div> 

            <div className={c.lpContainer}>
             <div className={c.lpImg}>
                <ImageLoader
                        width={696}
                        height={464}
                        src="breaking-001.jpg"
                     /> 
                </div> 

                <div className={c.txtContainer}>
                    <div className={c.num}> 2 </div>
                    <div>
                        <div className={c.lpTitle}>Queen Elizabeth the Last! Monarchy Faces Fresh Demand to be Axed</div>
                        <p className={c.sdate}>AUG 11, 2023</p>
                    </div>
                </div>
            </div> 

            <div className={c.lpContainer}>
             <div className={c.lpImg}>
                <ImageLoader
                        width={696}
                        height={464}
                        src="breaking-001.jpg"
                     /> 
                </div> 

                <div className={c.txtContainer}>
                    <div className={c.num}> 3 </div>
                    <div>
                        <div className={c.lpTitle}>Queen Elizabeth the Last! Monarchy Faces Fresh Demand to be Axed</div>
                        <p className={c.sdate}>AUG 11, 2023</p>
                    </div>
                </div>
            </div> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
