import './Price.css'
import { ways } from './data'

function Price_list(list){
    return(
        <>
            <div className='list'>
                <div className='list-div'>
                    <div className='top'>
                        <h2>{list.name}</h2>
                        <p>{list.name_bottom}</p>
                    </div>
                    <hr />
                    <div className='bottom'>
                        <div className='price_div'>
                            <h2>{list.price}</h2>
                            <h3>{list.price_right}</h3>
                        </div>
                        
                        <ul>
                            <li>{list.text1}</li>
                            <li>{list.text2}</li>
                            <li>{list.text3}</li>
                            <li>{list.text4}</li>
                            <li>{list.text5}</li>
                            <li>{list.text6}</li>
                        </ul>
                    </div>
                </div>
                <div className='start'>
                    <p>Start Free Trial</p>
                </div>
            </div>
        </>
    )
}

export default function Price(){
    return(
        <>
            <section className='background7'>
                <div>
                    <h2>Get your best deal</h2>
                    <div className='Monthly'>

                    </div>
                    <div className='price_list'>
                        {ways.map((way) =>(
                            <Price_list {...way}/>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}