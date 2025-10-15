import Placeholder from './components/Placeholder';
import { motion } from "motion/react"
import MainLogo from './components/MainPageLogo';
import SideScroll from './components/SideScroll';
import Pagination from './components/Pagination';
import { useState, useEffect } from 'react'
import { StatsCard } from "./components/StatsCard";
import { SalesChart } from "./components/SalesChart";
import { RevenueChart } from "./components/RevenueChart";
import { TrafficChart } from "./components/TrafficChart";
import { RecentActivity } from "./components/RecentActivity";
import { PerformanceMetrics } from "./components/PerformanceMetrics";
import { 
  DollarSign, 
  Users, 
  CreditCard, 
  Activity,
  Menu,
  Bell,
  Search,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

export default function Inventory() {

    const [is7Wide, setIs7Wide] = useState(window.innerWidth > 700);
    useEffect(() => {
        const handleResize = () => {
            setIs7Wide(window.innerWidth > 700);
        };
        window.addEventListener('resize', handleResize);
        // Clean up on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const [isWide, setIsWide] = useState(window.innerWidth > 800);
    useEffect(() => {
        const handleResize = () => {
            setIsWide(window.innerWidth > 800);
        };
        window.addEventListener('resize', handleResize);
        // Clean up on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const [isExtraWide, setIsExtraWide] = useState(window.innerWidth > 1000);
    useEffect(() => {
        const handleResize2 = () => {
            setIsExtraWide(window.innerWidth > 1000);
        };
        window.addEventListener('resize', handleResize2);
        // Clean up on unmount
        return () => window.removeEventListener('resize', handleResize2);
    }, []);
    const [isExtraExtraWide, setIsExtraExtraWide] = useState(window.innerWidth > 1300);
    useEffect(() => {
        const handleResize3 = () => {
            setIsExtraExtraWide(window.innerWidth > 1300);
        };
        window.addEventListener('resize', handleResize3);
        // Clean up on unmount
        return () => window.removeEventListener('resize', handleResize3);
    }, []);

    return (
        <>
            <h2 className='mx-4' style={{ color: 'black', paddingTop: is7Wide ? '130px' : '90px', marginLeft: '5%', paddingLeft: '5%' }}>Inventory</h2>
            <hr style={{ color: 'black', width: isWide ? isExtraWide ? isExtraExtraWide ? '25%' : '30%' : '40%' : '52%', border: '1px solid gray', marginLeft: '5%' }} />
            <Tabs defaultValue="overview" className="space-y-4 px-5">
                <TabsList>
                    <TabsTrigger style={{backgroundColor:'rgba(87, 233, 208, 1)', margin:'2px', border:'black'}} value="overview">Overview</TabsTrigger>
                    <TabsTrigger style={{backgroundColor:'rgba(87, 233, 208, 1)', margin:'2px', border:'black'}}  value="reports">Current Inventory</TabsTrigger>
                    <TabsTrigger style={{backgroundColor:'rgba(87, 233, 208, 1)', margin:'2px', border:'black'}}  value="analytics">Past Inventory</TabsTrigger>
                </TabsList>
                <br></br>
                <TabsContent value="overview" className="space-y-4">
                {/* Stats Grid */}
                <div className="grid gap-3 grid-cols-2 lg:grid-cols-4">
                    <StatsCard
                    title="Total Revenue"
                    value="45,231.89"
                    change="20.1"
                    trend="up"
                    icon={DollarSign}
                    />
                    <StatsCard
                    title="Remaining Inventory"
                    value="2,350"
                    change="12.5"
                    trend="up"
                    icon={Users}
                    />
                    <StatsCard
                    title="Total Orders"
                    value="1,234"
                    change="8.2"
                    trend="down"
                    icon={CreditCard}
                    />
                    <StatsCard
                    title="Needed Inventory"
                    value="1000"
                    change="5.7"
                    trend="up"
                    icon={Activity}
                    />
                </div>

                {/* Charts Grid */}
                {/* <div className="grid gap-4 lg:grid-cols-2">
                    <SalesChart />
                    <RecentActivity />
                </div> */}

                <div className="grid gap-4 lg:grid-cols-2">
                    <RevenueChart />
                    <PerformanceMetrics />
                </div>
                </TabsContent>

                <TabsContent value="analytics" className="space-y-4">
                <div className="grid gap-4 lg:grid-cols-2">
                    <TrafficChart />
                    <PerformanceMetrics />
                </div>
                <div className="grid gap-4">
                    <SalesChart />
                </div>
                </TabsContent>

                <TabsContent value="reports" className="space-y-4">
                <div className="grid gap-4 lg:grid-cols-2">
                    <RevenueChart />
                    <RecentActivity />
                </div>
                </TabsContent>
            </Tabs>
        </>
    )
}