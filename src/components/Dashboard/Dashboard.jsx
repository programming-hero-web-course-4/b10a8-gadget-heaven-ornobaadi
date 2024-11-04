import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredCartList, getStoredwishList } from '../../utility/addToDb';
import Gadget from '../Gadget/Gadget';

const Dashboard = () => {
    // Cart 
    const [cartList, setCartList] = useState([]);

    useEffect(() => {
        const storedCartList = getStoredCartList();
        console.log(storedCartList, allGadgets);

        const addCartList = allGadgets.filter(gadget => storedCartList.includes(gadget.gadgetId));

        setCartList(addCartList);
    }, [])

    // Wishlist 

    const [wishList, setWishList] = useState([]);
    const allGadgets = useLoaderData();

    useEffect(() => {
        const storedWishList = getStoredwishList();
        console.log(storedWishList, allGadgets);

        const addWishList = allGadgets.filter(gadget => storedWishList.includes(gadget.gadgetId));

        setWishList(addWishList);
    }, [])


    return (
        <div>
            <div className='flex flex-col items-center py-5 text-center text-white bg-[#9538E2]'>
                <h3 className="text-5xl font-bold my-5">Dashboard</h3>
                <p className='w-2/5'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <Tabs>
                <TabList className="flex space-x-4 justify-center text-white bg-[#9538E2] py-5">
                    <Tab
                        selectedClassName="bg-white text-black "
                        className="btn rounded-full bg-[#9538E2] text-white px-10 hover:bg-gray-300"
                    >
                        Cart
                    </Tab>
                    <Tab
                        selectedClassName="bg-white text-black "
                        className="btn rounded-full bg-[#9538E2] text-white px-10 hover:bg-gray-300"
                    >
                        Wishlist
                    </Tab>
                </TabList>

                <TabPanel>
                    <div className='flex justify-between'>
                        <h2>Cart: ({cartList.length}) </h2>
                        <h2>Total cost: </h2>
                    </div>
                    {
                        cartList.map(gadget => <Gadget key={gadget.gadgetId} gadget={gadget}></Gadget>)
                    }
                </TabPanel>
                <TabPanel>
                    <div>
                        <h2>Wishlist : ({wishList.length})</h2>
                    </div>
                    <div>
                    {
                        wishList.map(gadget => <Gadget key={gadget.gadgetId} gadget={gadget}></Gadget>)
                    }
                    </div>

                </TabPanel>
            </Tabs>
        </div>

    );
};

export default Dashboard;
