import { ERoutePaths } from '@/enums/ERoutePaths'
import { LayoutDashboard, Gauge, DraftingCompass, GitFork, Network, AlignVerticalDistributeEnd, BarChartHorizontal, CalendarClock, Users, PieChart, HelpCircle, ClipboardList, Settings, UserCog, BellRing, MessageCircleWarningIcon, Loader, Heart } from 'lucide-react'
import React, { FC } from 'react'
type ValueOf<T> = T[keyof T];
type RouteIconProps = {
    route: ValueOf<typeof ERoutePaths>
    className?: string
    props?:any
    strokeWidth?:number
}

const RouteIcon: FC<RouteIconProps> = ({ route, className, ...props }) => {
    const routeIcon: JSX.Element = {
        [ERoutePaths.AUTH]: <LayoutDashboard className={className} {...props} />,
        [ERoutePaths.APP]: <Loader className={className} {...props} />,
        [ERoutePaths.LIKES]: <Heart className={className} {...props} />,
    }[route]
    return routeIcon
}

export default RouteIcon;