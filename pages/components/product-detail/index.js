

import Head from 'next/head';


class Productdetail extends React.Component {
    state = {
        product: [],
        productTitle: '',
        image: '',
        description: '',
        data : [
            { id: '1', productName: 'Atta', image: 'https://5.imimg.com/data5/LL/LL/STDPRD-1153/aashirvaad-whole-wheat-atta-500x500.jpg' },
            { id: '2', productName: 'Chakki Atta', image: 'https://www.onlinebuy.pk/wp-content/uploads/2019/10/Sunridge-Chakki-Atta-10-KG-Onlinebuy-pk.jpg' },
            { id: '3', productName: 'Punjab atta', image: 'https://www.onlinebuy.pk/wp-content/uploads/2019/10/Punjab-Atta-No.1-20Kg-Onlinebuy-pk-600x600.jpg' },
            { id: '4', productName: 'Sugar control', image: 'https://pictures.grocerapps.com/original/grocerapp-low-dibe-sugar-control-atta-5eb3b22d7f626.jpeg' }
        ]
    }
    componentDidMount() {
        var desire = location.search.slice(1).split("&")[0].split("=")[1];
        var marvelHeroes = this.state.data.filter(function (hero) {
            return hero.id == desire;
        });
        this.setState({ product: marvelHeroes });
        this.setState({ productTitle: marvelHeroes[0].productName });
        this.setState({ image: marvelHeroes[0].image });
    }
    render() {
        const window
        return (
            <div>
                <Head>
                    <title>{this.state.productTitle}</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta property="og:title" content={this.state.productTitle} />
                     <meta property="og:url" content={window.location.href} />
                    <meta property="og:description" content="Shud atta" />
                    <meta property="og:site_name" content="IMDb" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:locale:alternate" content="en_GB" />
                    <meta property="og:locale:alternate" content="cn_CN" />
                    <meta property="og:image" content={this.state.image} />
                    <meta property="og:image:height" content="800" />
                    <meta name="description" content="Seo"></meta>
                </Head>
                <div className="porduct">
                    <div className="product-detail">
                        {this.state.product.map((post) => (
                            <div className="item-select" key={post.id}>
                                <div>
                                    <img src={post.image} alt="product image"/>
                                    <p>{post.productName}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
export default Productdetail;