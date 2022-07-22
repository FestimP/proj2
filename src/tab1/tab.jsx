import React from "react";
import { useState } from "react";
import './tab.css';
import Tables from './Data'
import Real from './propses'
function Tabs(){
    const[index,setIndex]=useState(0);
    return(
        <div className="Tabs">
            <div className="TabsList">
                <div className={"tabHead ${index==0?'active':null}"} onClick={()=>{setIndex(0)}}>Domains</div>
                <div className={"tabHead ${index==1?'active':null}"} onClick={()=>{setIndex(1)}}>Web Hosting</div>
                <div className={"tabHead ${index==2?'active':null}"} onClick={()=>{setIndex(2)}}>Dedicated Servers</div>
                <div className={"tabHead ${index==3?'active':null}"} onClick={()=>{setIndex(3)}}>Virtual Cloud Servers</div>
                <div className={"tabHead ${index==4?'active':null}"} onClick={()=>{setIndex(4)}}>WordPress Hosting</div>
                <div className={"tabHead ${index==5?'active':null}"} onClick={()=>{setIndex(5)}}>Email Hosting</div>
                <div className={"tabHead ${index==6?'active':null}"}onClick={()=>{setIndex(6)}}>VPS Hosting Servers</div>
                <div className={"tabHead ${index==7?'active':null}"}onClick={()=>{setIndex(7)}}>Free Hosting</div>
            </div>
            <div className="tabConstant" hidden={index!==0}>
            <div className="tabConstant d" >
            {Tables.map((tab, i) =>
                    <div key={i}>
                        {
                            <div className="coco">
                            <p className='title'>{tab.title}</p>
                            <p className="tab-content">{tab.content}</p>
                            <p className="span">{tab.span}</p>
                            <button className="btn">{tab.button}</button>
                            </div>
                            }
                    </div>
                )}
             </div></div>
            <div className="tabConstant" hidden={index!==1}> 
            <div className="tabConstant c" >
            <Real mainClass= 'coco' title='Bluehost Web Hosting ' content='6.99$' span='30 moneyback garanty*' button='buy now'/> 
            <Real mainClass= 'coco' title='HostGator Web Hosting ' content='6.99$' span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco' title='InMotion Web Hosting ' content='6.99$' span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco' title='DreamHost Web Hosting ' content='6.99$' span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco' title='A2 Web Hosting ' content='6.99$' span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco' title='AccuWeb Hosting ' content='6.99$' span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco' title='Liquid Web Hosting ' content='6.99$' span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco' title='Hostwinds Web Hosting ' content='6.99$' span='30 moneyback garanty*' button='buy now'/>
            </div></div>
            <div className="tabConstant" hidden={index!==2}>
            <div className="tabConstant c" >
            <Real mainClass= 'coco' title=' Liquid Web' content='6.99$' span='30 moneyback garanty*' button='buy now'/> 
            <Real mainClass= 'coco' title='InMotion Hosting'content='6.99$' span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco' title='HostGator' content='6.99$' span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco' title='Bluehost' content='6.99$' span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco' title='DreamHost' content='6.99$' span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco' title='A2 Hosting' content='6.99$' span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco' title='InterServer' content='6.99$' span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco' title='GoDaddy' content='6.99$' span='30 moneyback garanty*' button='buy now'/>
            </div>
            </div>
            <div className="tabConstant" hidden={index!==3}> 
            <div className="tabConstant c" >
            <Real mainClass= 'coco' title='Kamatera' content='6.99$' span='30 moneyback garanty*' button='buy now'/> 
            <Real mainClass= 'coco' title='Google Cloud Platform' content='6.99$' span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco' title='Scala Hosting' content='6.99$' span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco' title='Serverspace' content='6.99$' span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco' title='Cloudzy' content='6.99$' span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco' title='TMD Hosting' content='6.99$' span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco' title='AWS' content='6.99$' span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco' title='Vultr' content='6.99$' span='30 moneyback garanty*' button='buy now'/>
            </div>
            </div>
            <div className="tabConstant" hidden={index!==4}>
            <div className="tabConstant c" >
            <Real mainClass= 'coco' title='SiteGround ' content='6.99$' span='30 moneyback garanty*' button='buy now'/> 
            <Real mainClass= 'coco' title='InMotion Hosting' content='6.99$' span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco' title='IONOS' content='6.99$' span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco' title='A2 Hosting' content='6.99$' span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco' title='HostGator' content='6.99$' span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco' title='HostPapa' content='6.99$' span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco' title='GoDaddy Web Hosting' content='6.99$' span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco' title='Nexcess' content='6.99$' span='30 moneyback garanty*' button='buy now'/>
            </div>
            </div>
            <div className="tabConstant" hidden={index!==5}>
            <div className="tabConstant c" >
            <Real mainClass= 'coco' title='Dreamhost' content='6.99$'        span='30 moneyback garanty*' button='buy now'/> 
            <Real mainClass= 'coco' title='SiteGround' content='6.99$'       span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco' title='A2 Hosting' content='6.99$'       span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco' title='Zoho Mail' content='6.99$'        span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco' title='Google Workspace' content='6.99$' span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco' title='Hostinger' content='6.99$'        span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco' title='Bluehost' content='6.99$'         span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco' title='HostGator.com' content='6.99$'    span='30 moneyback garanty*' button='buy now'/>
            </div>
            </div>
            <div className="tabConstant" hidden={index!==6}>
            <div className="tabConstant c" >
            <Real mainClass= 'coco'  title='DreamHost' content='6.99$'           span='30 moneyback garanty*' button='buy now'/> 
            <Real mainClass= 'coco'  title='SiteGround' content='5.99$'          span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco'  title='GreenGeeks' content='7.99$'          span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco'  title='GoDaddy Web Hosting' content='3.99$' span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco'  title='Ionos' content='2.99$'               span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco'  title='HostPapa' content='4.99$'            span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco'  title='Hostinger' content='9.99$'           span='30 moneyback garanty*' button='buy now'/>
            <Real mainClass= 'coco'  title='A2 Hosting' content='16.99$'         span='30 moneyback garanty*' button='buy now'/>
            </div>
            </div>
            <div className="tabConstant" hidden={index!==7}>
            <div className="tabConstant c" >
            <Real mainClass= 'coco'  title='Site123' content='5/10'         span='Good service' button='Get now'/> 
            <Real mainClass= 'coco'  title='Jimdo.com' content='5/10'       span='Good service' button='Get now'/>
            <Real mainClass= 'coco'  title='Wix' content='6/10'             span='Good service' button='Get now'/>
            <Real mainClass= 'coco'  title='50webs.com' content='4/10'      span='Good service' button='Get now'/>
            <Real mainClass= 'coco'  title='AwardSpace.com' content='3/10'  span='Good service' button='Get now'/>
            <Real mainClass= 'coco'  title='EzyWebs' content='2/10'         span='Good service' button='Get now'/>
            <Real mainClass= 'coco'  title='Biz.nf' content='8/10'          span='Good service' button='Get now'/>
            <Real mainClass= 'coco'  title='Zoho.com' content='6.8/10'      span='Good service' button='Get now'/>
            </div>
            </div>
            
        </div>
    )
}
export default Tabs;