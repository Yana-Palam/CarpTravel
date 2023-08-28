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
export type ContactsFormFields = {
  fullName: string;
  email: string;
  message: string;
};
