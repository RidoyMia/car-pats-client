import React from 'react';
import { useDeletedSingleServiceMutation, useGetAllServicesQuery } from '../../../../components/store/ServicesApi/ServicesApi';
import Loading from '../../../../components/Loading/Loading';
import { Badge, Popover, Table } from "keep-react";
import { useState } from "react";
import { Button,Modal } from "keep-react";
import { CloudArrowUp } from "phosphor-react";
import {
  CalendarBlank,
  Crown,
  Cube,
  CurrencyDollar,
  DotsNine,
  DotsThreeOutline,
  Flag,
  Pencil,
  Spinner,
  Tag,
  Trash,
} from "phosphor-react";
import { useNavigate } from 'react-router-dom';
const AdminAllServices = () => {
  const [deletedSingleService,{isLoading:DeletedLoading}] = useDeletedSingleServiceMutation()
    const [showModal, setShowModal] = useState(false);
  const onClick = () => {
    setShowModal(!showModal);
  };
  const navigate = useNavigate()
    const {data,isLoading} = useGetAllServicesQuery();
   
    const deltedHandler = (id) =>{
      setShowModal(!showModal);
      deletedSingleService(id)
    }
    if(isLoading || DeletedLoading){
        return <Loading></Loading>
    }
    return (
        <div className='text-black container py-10'>
           
            <div>
            <Table showCheckbox={true}>
        <Table.Caption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-body-1 font-semibold text-metal-600">All services</p>
            </div>
            
          </div>
        </Table.Caption>
        <Table.Head>
          <Table.HeadCell className="min-w-[302px]">
            <p className="text-body-6 font-medium text-metal-400">Serial no.</p>
          </Table.HeadCell>
         
          <Table.HeadCell
            className="min-w-[124px]"
       
            iconPosition="left"
          >
            Picture
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[152px]"
            icon={<Spinner size={14} color="#8897AE" />}
            iconPosition="left"
          >
          OldPrice
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[114px]"
            icon={<DotsNine size={14} color="#8897AE" />}
            iconPosition="left"
          >
            Price
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[114px]"
            
            iconPosition="left"
          >
            Actions
          </Table.HeadCell>
          
          
          <Table.HeadCell className="min-w-[100px]" />
        </Table.Head>
        <Table.Body className="divide-y divide-gray-25">
          
          {
            data?.result?.map(r => <Table.Row className="bg-white">
            <Table.Cell>
              <p className="text-body-4 font-medium text-metal-500">
                DL - {r?._id}
              </p>
            </Table.Cell>
           
            <Table.Cell>
              <img src={r?.picture} className='w-32 h-20'></img>
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge
                 
                 
                 
                  iconPosition="left"
                >
                  ${r?.OldPrice}
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">${r?.price}</p>
            </Table.Cell>
           
           
            <Table.Cell>
              <button onClick={onClick} className='bg-yellow-600 text-white px-2 py-1  rounded-sm'>Read more</button>
            </Table.Cell>
            <Modal
       
       size="xl"
        show={showModal}
        position="center"
      >
        <Modal.Header>{r?.name}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <img src={r?.picture} className='w-full h-40'></img>
            <div className='flex justify-between items-center align-middle px-5'>
                <h1>Price : ${r?.price}</h1>
                <h1>OldPrice : ${r?.OldPrice}</h1>
            </div>
            <p>{r?.descriptions.slice(0,130)}</p>
          </div>
          <div className='flex justify-start items-center align-middle gap-x-3 py-5'>
          <button  className='bg-green-600 text-white px-2 py-1  rounded-sm' onClick={()=>navigate(`/adminDashboard/updateservice/${r?._id}`)}>Update</button>
          <button  className='bg-red-600 text-white px-2 py-1  rounded-sm' onClick={()=>deltedHandler(r?._id)}>Delete</button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          
          
          <div className='flex justify-end'>
             <button onClick={onClick}  className='bg-red-600 text-white px-2 py-1  rounded-sm'>X</button>
          </div>
        </Modal.Footer>
      </Modal>
          </Table.Row>)
          }
        </Table.Body>
      </Table>
            </div>
            
        </div>
    );
};

export default AdminAllServices;