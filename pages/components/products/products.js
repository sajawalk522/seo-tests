import React, { useState, useEffect } from 'react';
import Link from 'next/link'

const App = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(
            [
                { id: '1', productName: 'Atta', image: 'https://5.imimg.com/data5/LL/LL/STDPRD-1153/aashirvaad-whole-wheat-atta-500x500.jpg' },
                { id: '2', productName: 'Chakki Atta', image: 'https://www.onlinebuy.pk/wp-content/uploads/2019/10/Sunridge-Chakki-Atta-10-KG-Onlinebuy-pk.jpg' },
                { id: '3', productName: 'Punjab atta', image: 'https://www.onlinebuy.pk/wp-content/uploads/2019/10/Punjab-Atta-No.1-20Kg-Onlinebuy-pk-600x600.jpg' },
                { id: '4', productName: 'Sugar control', image: 'https://pictures.grocerapps.com/original/grocerapp-low-dibe-sugar-control-atta-5eb3b22d7f626.jpeg' }
            ]
        )
    });
    return (
        <div>
            <div className="porduct">
                <div>
                    {products.map((post) => (
                        <div className="item-select" key={post.id}>
                            <Link href={"/product?id=" + post.id}>
                                <div>
                                    <img src={post.image} alt="product image"/>
                                    <p>{post.productName}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default App;