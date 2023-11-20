import React from 'react';
import { useGetAllBestServicesQuery } from '../store/serviceBlogApi/ServiceBlogApi';
import Loading from '../Loading/Loading';
import { Badge, Card,} from "keep-react";
import serviceOneimg from "../../assets/s.1.jpg"
import serviceTwo from "../../assets/s2.jpg"
import servicethreeimg from "../../assets/s3.jpg"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useGetAllBlogsQuery } from '../store/BlogApi/BlogApi';

const Blogs = () => {
    const renderPrevButton = () => false;
    const renderNextButton = () => false;
   
    const responsive = {
        0: { 
            items: 1
        },
        568: { 
            items: 2
        },
        1024: {
            items: 2, 
            itemsFit: 'contain'
        },
    };
    const { data, isError, isLoading } = useGetAllBlogsQuery(undefined)
    if (isLoading) {
        return <Loading></Loading>
    }
    const items = data?.result?.map((s, index) => (
        <div key={index} className="item gap-x-3" data-value="1">
           
           <Card
                  className="max-w-lg overflow-hidden rounded-md"
                  imgSrc={s?.picture}
                  imgSize="md"
                >
                  <Card.Container className=" px-3 py-2">
                    <Card.Container>
                      <Card.Title className=" md:text-body-2 text-lg   text-metal-700 uppercase font-semibold text-red-500">
                        {s?.title}
                      </Card.Title>
                      <Card.Description className="text-body-5 text-md py-3 text-metal-500">
                        {s?.descriptions?.slice(0,100)}...
                      </Card.Description>
                      <button className='text-white text-sm border mt-5 bg-blue-900 px-3 py-1 rounded-md  hover:bg-white hover:text-black hover:border'>Read more</button>
                    </Card.Container>
                    
                    
                  </Card.Container>
                </Card>
        </div>
    ));
    return (
        <div className='container lg:py-20 md:py-16 py-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-x-5 gap-y-10'>
                <div>
                    <h1 className='text-2xl font-bold'>WELCOME TO <span className='text-red-600'>REPAIRSHOP</span></h1>
                    <p className='py-4 text-lg text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Quos dolo rem consequ untur, natus laudantium commodi earum aliquid in ullam.Lorem ipsum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum sunt ut dolorem laboriosam culpa excepturi sed distinctio eius! Ut magnam numquam libero quia vero blanditiis fugit corporis quisquam, debitis quidem laudantium deleniti.</p>
                    <div className='grid grid-cols-1 py-10 gap-x-2 lg:grid-cols-3 md:grid-cols-3 gap-y-3'>
                    <Card
                  className="max-w-md overflow-hidden rounded-md"
                  imgSrc={serviceOneimg}
                  imgSize="md"
                >
                  
                </Card>
                <Card
                  className="max-w-md overflow-hidden rounded-md"
                  imgSrc={serviceTwo}
                  imgSize="md"
                >
                  
                </Card>
                <Card
                  className="max-w-md overflow-hidden rounded-md"
                  imgSrc={servicethreeimg}
                  imgSize="md"
                >
                  
                </Card>
                    </div>
                </div>
                <div>
                <AliceCarousel
                mouseTracking
                items={items}
                paddingLeft={3}
                paddingRight={3}
                autoPlay={true}
                button ={false}
         renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
        responsive={responsive}
    />
                </div>
            </div>
        </div>
    );
};

export default Blogs;