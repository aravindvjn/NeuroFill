import { InvoiceItem } from "@/components/forms/invoice-form/type";
import React from "react";

type Props = {
    items: InvoiceItem[];
    total: number;
}
const InvoicePreview = ({items,total}:Props) => {
  return (
    <div className="py-8 mx-auto">
      <div className="border border-gray-300 p-6 rounded-lg shadow-md print-only">
        <h1 className="text-2xl font-bold mb-4">Invoice</h1>
        <div className="mb-4">
          {items.map((item, index) => (
            <div key={index} className="flex justify-between mb-2">
              <span>{item.description}</span>
              <span>
                {item.quantity} x ₹{item.price}
              </span>
              <span>₹{(item.quantity * item.price).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="border-t pt-4 font-bold text-lg">Total: ₹{total}</div>
      </div>
    </div>
  );
};

export default InvoicePreview;
