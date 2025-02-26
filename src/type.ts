export interface WidgetDetails {
    title: string;
    num: number | string;
    icon: string;
    bgColor: string;
    icon2: string;
    text2: string;
    className?: string
  }
  
export interface WidgetProps {
    type: 'transactions' | 'customers' | 'cells' | 'loan1' | 'loan2' | 'loan3' | 'loan4' | 'loan5' | 'loan6';
    className: string;
}
