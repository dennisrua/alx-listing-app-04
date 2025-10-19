import { BookingDetails } from '@/interfaces';

interface OrderSummaryProps {
  bookingDetails: BookingDetails;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ bookingDetails }) => {
  const subtotal = bookingDetails.price * bookingDetails.totalNights;
  const grandTotal = subtotal + bookingDetails.bookingFee;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Review Order Details</h2>
      <div className="flex items-center mt-4">
        <img 
          src={bookingDetails.imageUrl} 
          alt="Property" 
          className="w-32 h-32 object-cover rounded-md" 
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
          <p className="text-sm text-gray-500">4.76 (345 reviews)</p>
          <p className="text-sm text-gray-500">{bookingDetails.startDate} • {bookingDetails.totalNights} Nights</p>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="mt-6">
        <div className="flex justify-between">
          <p className="text-gray-600">${bookingDetails.price} × {bookingDetails.totalNights} nights</p>
          <p>${subtotal}</p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-gray-600">Booking Fee</p>
          <p>${bookingDetails.bookingFee}</p>
        </div>
        <div className="flex justify-between mt-2 font-semibold text-lg border-t pt-2">
          <p>Grand Total</p>
          <p>${grandTotal}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;