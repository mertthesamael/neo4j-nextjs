"use client"
import { Button } from '@/components/ui/button';
import { ERoutePaths } from '@/enums/ERoutePaths';
import { useRouter, useSelectedLayoutSegment } from 'next/navigation';
import { FC } from 'react';
import SidebarActiveIndicator from './sidebar-active-indicator';
import RouteIcon from '@/components/shared/Icons/route-icon';
type ValueOf<T> = T[keyof T];
type SidebarNavigationButtonProps = {
  label: string,
  href: ValueOf<typeof ERoutePaths>
}

const SidebarNavigationButton: FC<SidebarNavigationButtonProps> = ({ label, href }) => {
  const router = useRouter()
  const segmentRaw = useSelectedLayoutSegment()
  const segment = segmentRaw ? segmentRaw : '/'
  const isActive = href === '/' ? segment === href : '/' + segment === href;


  const panelHandle = (e: any) => {
    e.stopPropagation()
    router.push(`${href}`)
  }
  return (
    <Button onClick={(panelHandle)} className={`${isActive ? "bg-secondary font-semibold hover:bg-secondary" : " !text-ghost-text bg-transparent hover:bg-secondary font-normal"} w-full px-[10px] py-[6px] justify-start relative h-[36px] rounded-[8px] text-foreground gap-[8px] font-medium`}>
      {isActive && <SidebarActiveIndicator />}
      <RouteIcon route={href} strokeWidth={isActive ? 2 : 1} className={`transition-all ${isActive ? "stroke-primary" : "sidebar-nav-icon"}`} />
      {label}
    </Button>
  )
}

export default SidebarNavigationButton;