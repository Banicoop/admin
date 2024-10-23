export interface WidgetDetails {
    title: string;
    num: number;
    icon: string;
    bgColor: string;
    icon2: string;
    text2: string
  }
  
export interface WidgetProps {
    type: 'transactions' | 'customers' | 'cells'
}
