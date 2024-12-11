import { useContext } from 'react';
import { SidebarContext } from '../components/layout/DashboardLayout';

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};