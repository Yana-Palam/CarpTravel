export type ServicesSlideProps = {
  className?: string;
  total: number;
  active: number;
  picture: any;
  bg: any;
  title: string;
  description: string;
  onClickBtn: (index: number) => void;
};

export type CareerFormFields = {
  fullName: string;
  email: string;
  position: string;
  phone: string;
  message: string;
  policy: boolean;
};
