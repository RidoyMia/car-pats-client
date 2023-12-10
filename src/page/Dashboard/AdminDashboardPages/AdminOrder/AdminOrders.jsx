import React, { useEffect, useState } from 'react';
import { Avatar, Badge, Button, Popover, Table } from "keep-react";
import {
  ArrowsDownUp,
  Crown,
  Cube,
  DotsThreeOutline,
  Pencil,
  Trash,
} from "phosphor-react";
import { useGetAllproductPaymentQuery } from '../../../../components/store/ProductPaymentApi/ProductPaymentApi';
import Loading from '../../../../components/Loading/Loading';
const AdminOrders = ({services}) => {
    const [page,setPage] = useState(1)
    const [totalPages,setTotalPages] = useState(0)
    const {data,isLoading} = useGetAllproductPaymentQuery(page);;
    useEffect(() => {
        if (data?.result?.total) {
          setTotalPages(Math.ceil(data.result.total / 10));
        }
      }, [data]);

   let pagesArray = [];
   for (let i = 0; i <= totalPages; i++) {
      pagesArray.push(i)
    }
    console.log(pagesArray);
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='container text-black'>
            <h1 className='font-semibold py-5'>Products</h1>
             <Table showCheckbox={true}>
        <Table.Caption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-body-1 font-semibold text-metal-600">
                Product orders Transactions
              </p>
            </div>
            
          </div>
        </Table.Caption>
        <Table.Head>
          <Table.HeadCell className="min-w-[290px]">
            <p className="text-body-6 font-medium text-metal-400">Picture</p>
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[290px]">
            <p className="text-body-6 font-medium text-metal-400">TransactionId</p>
          </Table.HeadCell>
          
          <Table.HeadCell
            className="min-w-[160px]"
            icon={<ArrowsDownUp size={14} color="#8897AE" />}
          >
            Amount
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[150px]"
            icon={<ArrowsDownUp size={14} color="#8897AE" />}
          >
            Status
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[183px]"
            icon={<ArrowsDownUp size={14} color="#8897AE" />}
          >
            Received Date
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[100px]" />
        </Table.Head>
        <Table.Body className="divide-y divide-gray-25">
         
         {
            data?.result?.result?.map(s =>  <Table.Row className="bg-white">
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar
                      
                      img={s?.id?.picture }
                      size="2xl"
                    />
                    
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <p>{s?.transaction}</p>
                    
                  </div>
                </div>
              </div>
            </Table.Cell>
           
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">${s?.id.price}</p>
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge
                  colorType="light"
                  color="success"
                  icon={<Crown size={18} weight="light" />}
                  iconPosition="left"
                >
                  {s?.paid ? <p>Paid</p> : 'Unpaid'}
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">{s?.createdAt.split(':')[0]}</p>
          
            </Table.Cell>
            <Table.Cell>
              <Popover
                showDismissIcon={false}
                showArrow={false}
                className="w-48 p-2 border border-metal-100"
                additionalContent={
                  <ul className="flex flex-col gap-1">
                    <li className="hover:bg-metal-100 py-1 px-2 rounded">
                      <button className="w-full flex items-center justify-between text-body-4 font-normal text-metal-600">
                        <span>Delete</span>
                        <span>
                          <Trash />
                        </span>
                      </button>
                    </li>
                    <li className="hover:bg-metal-100 py-1 px-2 rounded">
                      <button className="w-full flex items-center justify-between text-body-4 font-normal text-metal-600">
                        <span>Edit</span>
                        <span>
                          <Pencil />
                        </span>
                      </button>
                    </li>
                  </ul>
                }
              >
                <Button type="outlineGray" size="xs" circle={true}>
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </Button>
              </Popover>
            </Table.Cell>
          </Table.Row>)
         }
        </Table.Body>
            </Table> 
            <div className='my-5'>
                {pagesArray.map((p,index)=> <button key={index} className={`px-2 py-1 rounded-lg mx-1 text-white ${page == index + 1 ? " bg-blue-400 " : "bg-blue-900"}`} onClick={()=>setPage(index + 1)}>{p + 1}</button>)}
            </div>
        </div>
    );
};

export default AdminOrders;