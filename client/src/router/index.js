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
import addroom from "@/components/addroom"
import review from "@/components/review"
import dashboard from "@/components/dashboard"
import hotelmanagement from "@/components/hotelmanagement"
import addHotel from "@/components/addHotel"
import employeemanagement from "@/components/employeemanagement"
import addemployee from "@/components/addemployee"
import employee from "@/components/employee"
import roomservice from "@/components/roomservice"
import roomservicemanagement from "@/components/roomservicemanagement"
import hotelservice from "@/components/hotelservice"
import hotelservicemanagement from "@/components/hotelservicemanagement"
import complaint from "@/components/complaint"
import complaintmanagement from "@/components/complaintmanagement"
import reviewmanagement from "@/components/reviewmanagement"

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
    path: '/addroom',
    name: 'addroom',
    component: addroom
  },
  {
    path: '/review',
    name: 'review',
    component: review
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/hotelmanagement',
    name: 'hotelmanagement',
    component: hotelmanagement
  },
  {
    path: '/addHotel',
    name: 'addHotel',
    component: addHotel
  },
  {
    path: '/employeemanagement',
    name: 'employeemanagement',
    component: employeemanagement
  },
  {
    path: '/addemployee',
    name: 'addemployee',
    component: addemployee
  },
  {
    path: '/employee',
    name: 'employee',
    component: employee
  },
  {
    path: '/roomservice',
    name: 'roomservice',
    component: roomservice
  },
  {
    path: '/roomservicemanagement',
    name: 'roomservicemanagement',
    component: roomservicemanagement
  },
  {
    path: '/hotelservice',
    name: 'hotelservice',
    component: hotelservice
  },
  {
    path: '/hotelservicemanagement',
    name: 'hotelservicemanagement',
    component: hotelservicemanagement
  },
  {
    path: '/complaint',
    name: 'complaint',
    component: complaint
  },
  {
    path: '/complaintmanagement',
    name: 'complaintmanagement',
    component: complaintmanagement
  },
  {
    path: '/reviewmanagement',
    name: 'reviewmanagement',
    component: reviewmanagement
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router