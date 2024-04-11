import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Dropdown, Modal, Table, Label, TextInput, Button } from "flowbite-react";
import { SiAiqfome } from "react-icons/si";
import { IoIosCart } from "react-icons/io";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

import { sendCartToStore } from '../store/actions'
import { Counter } from './counter'

export const CartComp = (props) => {

  const dispatch = useDispatch()

  const [showDetailedCart, setShowDetailedCart] = useState(false)

  const cart = useSelector(state => state.store.cart)

  const addItem = (item) => {
    if (!cart) {
      const updatedCart = [{ ...item, quantity: 1 }];
      dispatch(sendCartToStore(updatedCart));
      return;
    }
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      dispatch(sendCartToStore(updatedCart));
    } else {
      const updatedCart = [...cart, { ...item, quantity: 1 }];
      dispatch(sendCartToStore(updatedCart));
    }
  };

  const subItem = (item) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (existingItemIndex === -1) return;
    const existingItem = cart[existingItemIndex];
    if (existingItem.quantity > 1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex] = { ...existingItem, quantity: existingItem.quantity - 1 };
      dispatch(sendCartToStore(updatedCart));
    } else {
      const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
      dispatch(sendCartToStore(updatedCart));
    }
  };



  return (
    <>
      <Dropdown label="Cart" size="lg" inline>
        <Dropdown.Header>
          Cart Summery
        </Dropdown.Header>
        {
          cart.length > 0 ? cart.map((item) => {
            return (
              <>
                <div className='flex flex-row justify-between px-3'><span className='truncate'>{item.name}</span><span>x {item.quantity}</span></div>
              </>
            )
          }) :
            <span className='flex flex-col justify-between items-center p-4'>
              <SiAiqfome className='text-5xl mb-3' />
              Cart is bit lonely! Add something
            </span>
        }
        <Dropdown.Divider />
        {cart.length > 0 && <Dropdown.Item onClick={() => setShowDetailedCart(!showDetailedCart)} className='font-black'>View Cart <MdOutlineShoppingCartCheckout className='mx-3 text-lg' /></Dropdown.Item>}
      </Dropdown>
      <Modal show={showDetailedCart} size="7xl" onClose={() => setShowDetailedCart(false)}>
        <Modal.Header><IoIosCart className="text-4xl mx-3" /></Modal.Header>
        <Modal.Body>
          <div className="overflow-x-auto">
            <Table striped>
              <Table.Head>
                <Table.HeadCell>S.No</Table.HeadCell>
                <Table.HeadCell>Product name</Table.HeadCell>
                <Table.HeadCell>Category</Table.HeadCell>
                <Table.HeadCell>Description</Table.HeadCell>
                <Table.HeadCell>Price</Table.HeadCell>
                <Table.HeadCell>Quantity</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {cart.map((item, index) => {
                  return (
                    <>
                      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>{index}</Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{item.name}</Table.Cell>
                        <Table.Cell>{item.category}</Table.Cell>
                        <Table.Cell>{item.description}</Table.Cell>
                        <Table.Cell>${item.price}</Table.Cell>
                        <Table.Cell><Counter addItem={() => addItem(item)} subItem={() => subItem(item)} value={item.quantity} /></Table.Cell>
                      </Table.Row>
                    </>
                  )
                })}
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell></Table.Cell>
                  <Table.Cell>Total :</Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
          <div className="flex max-w-md flex-col gap-4">
            <Label htmlFor="disabledInput1">Name</Label>
            <TextInput type="text" id="disabledInput1" placeholder="Name" />
            <Label htmlFor="disabledInput2">Email</Label>
            <TextInput type="text" id="disabledInput2" placeholder="@Email" />
            <Label htmlFor="disabledInput2">Card Number</Label>
            <TextInput type="text" id="disabledInput2" placeholder="0000 0000 0000 0000" />
            <Label htmlFor="disabledInput2">Expiry Code</Label>
            <TextInput type="month" id="disabledInput2" placeholder="Expiry Code" />
            <Label htmlFor="disabledInput2">CVV</Label>
            <TextInput type="text" maxLength="3" minLength="3" id="disabledInput2" placeholder="CVV" />
            <Label htmlFor="disabledInput2">Address</Label>
            <TextInput type="text" id="disabledInput2" placeholder="Address" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="blue">Pay Now</Button>
        </Modal.Footer>
      </Modal >
    </>
  )
}
