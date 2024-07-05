import Image from "next/image";
import React from "react";
import style from './product.module.css';
import AddToCart from "./addtocart";
import { Prosto_One } from "next/font/google";

const ProductMain = ({data}: any) => {

    // console.log("props is here",data)
    const prop = {
        stock:data.stock,
        price:data.product_price,
        currency:data.currency
    }
    return (
        <div style={{marginTop:'30px'}}>
            <div style={{display:'flex',flexFlow:'row',width:'100%'}}>
            <div className={style.main}>
                <div className={style.divimg}>
                    <img className={style.product_img} src={data.product_url} alt="Product Image" />
                </div>
                <div style={{
                    display: 'flex', width: '100%', padding: '5px', margin: '10px'
                }}>
                    <table className="table-fixed" style={{ fontSize: '12px' }}>
                        <tbody style={{alignContent:'center'}}>
                            <tr>
                                <td colSpan={2}><h2 style={{fontSize:'20px',fontWeight:'bold'}}>MPN</h2><span>{data.mpn}</span></td>
                            </tr>
                            <tr>
                                <td className={style.infokey} >Manufacturer</td>
                                <td>{data.manufacturer}</td>
                            </tr>
                            <tr>
                                <td className={style.infokey}>Manufacturer Product Number</td>
                                <td>{data.mpn}</td>
                            </tr>
                            <tr>
                                <td className={style.infokey}>Description</td>
                                <td>{data.short_description}</td>

                            </tr>
                            <tr>
                                <td className={style.infokey}>Manufacturer Standard Lead Time</td>
                                <td>{data.lead_time} days</td>
                            </tr>
                            {/* <tr>
                                <td className={style.infokey}>Detailed Description</td>
                                <td>General Purpose Relay SPST-NO (1 Form A) 12VDC Coil Through Hole
                                </td>
                            </tr> */}
                            <tr>
                                <td className={style.infokey} >Datasheet</td>
                                <td><a href="/je">Datasheet</a></td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                
            </div>
            <div className={style.addtocard}>              
                    <AddToCart props={prop} />      

            </div>
            </div>

            

            <div style={{fontSize:'24px',fontWeight:'bold',margin:'8px'}}>Product Attributes</div>
            <div className={style.main}>
                <table className="table-fixed min-w-full bg-white border border-gray-200" >
                    <thead>
                        <tr>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">TYPE</th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">DESCRIPTION</th>
                        </tr>
                    </thead>
                    <tbody>
                    {JSON.parse(data.specs).map((spec:any, index:number) => (
                    <tr key={index}>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 font-bold">
                        {spec.name}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        {spec.value}
                        </td>
                    </tr>
                    ))}

                    </tbody>

                </table>



            </div>

        </div>
    );
}
export default ProductMain