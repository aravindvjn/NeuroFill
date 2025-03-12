"use client";
import { useState } from "react";
import { InvoiceItem } from "./type";
import Input from "@/components/ui/input";
import toast from "react-hot-toast";
import InvoicePreview from "@/components/previews/invoice/invoice";
import { FontFamilyType } from "@/components/common/type";
import SelectFontFamily from "../resume-form/select-font";

const InvoiceForm = () => {
  const [items, setItems] = useState<InvoiceItem[]>([
    { description: "", quantity: 1, price: 0 },
  ]);
  const [fontFamily, setFontFamily] = useState<FontFamilyType>("sans-serif");
  const handleChange = (
    index: number,
    field: keyof InvoiceItem,
    value: string | number
  ) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value as never;
    setItems(updatedItems);
  };

  const addItem = () =>
    setItems((prev) => {
      if (prev?.length > 0 && !prev[prev.length - 1].description) {
        toast.dismiss();
        toast.error(
          "Please provide a description on the existing item to add more items"
        );
        return prev;
      }
      return [...items, { description: "", quantity: 1, price: 0 }];
    });

  const removeItem = (index: number) =>
    setItems(items.filter((_, i) => i !== index));

  const total = items
    .reduce((sum, item) => Number(sum) + item.quantity * item.price, 0)
    .toFixed(2);

  return (
    <div className="py-8  mx-auto">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-[20px]">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col gap-[12px] ">
            <Input
              type="text"
              label="Description"
              value={item.description}
              onChange={(e) =>
                handleChange(index, "description", e.target.value)
              }
            />
            <Input
              type="number"
              label="Qty"
              value={item.quantity}
              onChange={(e) => handleChange(index, "quantity", +e.target.value)}
            />
            <Input
              type="number"
              label="Price"
              value={item.price}
              onChange={(e) => handleChange(index, "price", +e.target.value)}
            />
            <button
              onClick={() => removeItem(index)}
              className="bg-red-500 text-white px-3 py-2 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={addItem}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Item
      </button>

      <div className="mt-8 border-t pt-4">
        <h2 className="text-xl font-semibold">Total: ₹{total}</h2>
      </div>

      <div className="mt-4 text-[12px] sm:text-[14px] lg:text-[16px] horizontally-center">
        <button
          onClick={() => window.print()}
          className=" bg-green-500 text-white px-4 py-2 rounded"
        >
          Print Invoice
        </button>
        <SelectFontFamily
          fontFamily={fontFamily}
          handleFontFamily={(e) =>
            setFontFamily(e.target.value as FontFamilyType)
          }
        />
      </div>
      <div className={fontFamily}>
        <InvoicePreview items={items} total={Number(total)} />
      </div>
    </div>
  );
};

export default InvoiceForm;
