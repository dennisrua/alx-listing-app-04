export interface BookingDetails {
  propertyName: string;
  price: number;
  bookingFee: number;
  totalNights: number;
  startDate: string;
  endDate: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
}

export interface ContactInfo {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export interface PaymentInfo {
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}

export interface BillingAddress {
  streetAddress: string;
  aptSuite?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface FilterOption {
  value: string;
  label: string;
}

export interface FilterProps {
  label: string;
  options: FilterOption[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  className?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface OrderSummaryProps {
  bookingDetails: BookingDetails;
}