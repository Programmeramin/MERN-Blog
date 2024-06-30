import { Footer } from "flowbite-react"
import {Link} from "react-router-dom"
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const FooterCom = () => {
  return (
    <>
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
            <div className="mt-5">
            <Link to="/" className="self-center  whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 rounded-lg text-white">AMIN</span>
        BLOG
      </Link> 
            </div>
            <div className="grid grid-col-2 gap-8 sm:mt-4 sm:grid-cols-3">
              <div>
              <Footer.Title title="ABOUT"/>
              <Footer.LinkGroup col>
              <Footer.Link href="https://www.100jsprojects.com" target="_blank" rel="noopener noreferrer">
                   100 JS Projects
                 </Footer.Link>

                 <Footer.Link href="/about" target="_blank" rel="noopener noreferrer">
                   {`AMIN'S BLOG`}
                 </Footer.Link>

              </Footer.LinkGroup>
              </div>

              <div>
              <Footer.Title title="FOLLOW US"/>
              <Footer.LinkGroup col>
              <Footer.Link href="https://www.github.com/programmeramin" target="_blank" rel="noopener noreferrer">
              GITHUB
                 </Footer.Link>

                 <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
               DISCORD
                 </Footer.Link>

              </Footer.LinkGroup>
              </div>

              <div>
              <Footer.Title title="LEGAL"/>
              <Footer.LinkGroup col>
              <Footer.Link href="#">
                   PRIVACY POLICY
                 </Footer.Link>

                 <Footer.Link href="#">
                    TERMS &amp; CONDITIONS
                 </Footer.Link>

              </Footer.LinkGroup>
              </div>
            </div>
        </div>
        <Footer.Divider/>
        <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Amin's Blog" year={new Date().getFullYear()}/>
            <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-between">
                <Footer.Icon href="#" icon={FaFacebook}/>
                <Footer.Icon href="#" icon={FaInstagram}/>
                <Footer.Icon href="#" icon={FaXTwitter}/>
                <Footer.Icon href="https://www.github.com/programmeramin" icon={FaGithub}/>
                <Footer.Icon href="#" icon={FaDribbble}/>
            </div>
        </div>
      </div>
    </Footer>
    </>
  )
}

export default FooterCom
