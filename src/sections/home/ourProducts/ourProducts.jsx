import {Link, Image} from '@shopify/hydrogen';

import {Heading, Section, Grid} from '~/components';

export function OurProductsSection({data, title = 'Collections', ...props}) {
  const items = data.filter((item) => item.image).length;
  const haveCollections = data.length > 0;

  if (!haveCollections) return null;

  return (
    <div className='our-products'>
        <h3 className='subtitle'>Our products</h3>
        <h2> Taking What The Earth Provides</h2>
        <p>turning plants and grains into natural, nutritive ingredients.</p>
        <Section {...props} heading=''> {/* Section title*/}
            <Grid items={items}>
                {data.map((collection) => {
                if (!collection?.image) {
                    return null;
                }
                return (
                    <Link key={collection.id} to={`/collections/${collection.handle}`}>
                    <div className="grid gap-4">
                        <div className="card-image bg-primary/5 aspect-[3/2]">
                        {collection?.image && (
                            <Image
                            alt={`Image of ${collection.title}`}
                            data={collection.image}
                            height={400}
                            sizes="(max-width: 32em) 100vw, 33vw"
                            width={600}
                            widths={[400, 500, 600, 700, 800, 900]}
                            loaderOptions={{
                                scale: 2,
                                crop: 'center',
                            }}
                            />
                        )}
                        </div>
                        <Heading size="copy">{collection.title}</Heading>
                    </div>
                    </Link>
                );
                })}
            </Grid>
        </Section>
    </div>
  );
}

// function HomeProducts() {
//     const {
//       language: {isoCode: languageCode},
//       country: {isoCode: countryCode},
//     } = useLocalization();
  
//     const {data} = useShopQuery({
//       query: ALL_PRODUCTS_QUERY,
//       variables: {
//         country: countryCode,
//         language: languageCode,
//         pageBy: PAGINATION_SIZE,
//       },
//       preload: true,
//     });
  
//     const products = data.products;
  
//     return (
//       <ProductGrid
//         key="products"
//         url={`/products?country=${countryCode}`}
//         collection={{products}}
//       />
//     );
//   }
  
//   const ALL_PRODUCTS_QUERY = gql`
//     ${PRODUCT_CARD_FRAGMENT}
//     query AllProducts(
//       $country: CountryCode
//       $language: LanguageCode
//       # $pageBy: Int!
//       $cursor: String
//     ) @inContext(country: $country, language: $language) {
//       products(first: 6, after: $cursor, sortKey: BEST_SELLING) {
//         nodes {
//           ...ProductCard
//         }
//       }
//     }
//   `;