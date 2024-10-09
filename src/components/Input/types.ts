export interface IInput extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
    lefticon?: React.ReactNode;
    name: string;
    control: any;
    errorMessage?: string;
}