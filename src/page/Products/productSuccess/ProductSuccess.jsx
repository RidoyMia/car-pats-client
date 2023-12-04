import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleProductPaymentQuery } from '../../../components/store/ProductPaymentApi/ProductPaymentApi';
import Loading from '../../../components/Loading/Loading';
import { Avatar, Badge, Button, Popover, Table } from "keep-react";
import {
  ArrowsDownUp,
  Crown,
  Cube,
  DotsThreeOutline,
  Pencil,
  Trash,
} from "phosphor-react";

const ProductSuccess = () => {
    const  {id} = useParams();
    const {data,isLoading} = useGetSingleProductPaymentQuery(id);
    if(isLoading){
        return <Loading></Loading>
    }
    console.log(data,'product payment');
    return (
        <div className='text-center '>
             <Table showCheckbox={true}>
        <Table.Caption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-body-1 font-semibold text-metal-600">
                Cash Out Transactions
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
         
          <Table.Row className="bg-white">
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar
                      
                      img={data?.result[0]?.id?.picture }
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
                    <p>{data?.result[0]?.transaction}</p>
                    
                  </div>
                </div>
              </div>
            </Table.Cell>
           
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">${data?.result[0]?.id.price}</p>
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge
                  colorType="light"
                  color="success"
                  icon={<Crown size={18} weight="light" />}
                  iconPosition="left"
                >
                  {data?.result[0]?.paid ? <p>Paid</p> : 'Unpaid'}
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">{data?.result[0]?.createdAt.split(':')[0]}</p>
          
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
          </Table.Row>
        </Table.Body>
      </Table>
        </div>
    );
};

export default ProductSuccess;