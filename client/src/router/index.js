import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "@/components/home"
import reservation from "@/components/reservation"
import checkout from "@/components/checkout"
import order from "@/components/order"
import findreservation from "@/components/findreservation"
import modifyreservation from "@/components/modifyreservation"
import confirmation from "@/components/confirmation"
import roommanagement from "@/components/roommanagement"
import customer from "@/components/customer"
import room from "@/components/room"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/reservation',
    name: 'reservation',
    component: reservation
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: checkout
  },
  {
    path: '/order',
    name: 'order',
    component: order
  },
  {
    path: '/findreservation',
    name: 'findreservation',
    component: findreservation
  },
  {
    path: '/modifyreservation',
    name: 'modifyreservation',
    component: modifyreservation
  },
  {
    path: '/confirmation',
    name: 'confirmation',
    component: confirmation
  },
  {
    path: '/roommanagement',
    name: 'roommanagement',
    component: roommanagement
  },
  {
    path: '/customer',
    name: 'customer',
    component: customer
  },
  {
    path: '/room',
    name: 'room',
    component: room
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
