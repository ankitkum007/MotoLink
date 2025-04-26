import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import cardetails from "../utils/cardetails.json";
import InputBox from "./InputBox";
import Dropdown from "./DropDown";
import TextareaField from "./TextAreaFiled";
import features from "../utils/features.json";
import CheckBox from "./CheckBox";
import { db } from '../../configs/index.js';
import { CarImage, CarListing } from "../../configs/schema.js";
import UploadImage from "./UploadImage.jsx";
import { useNavigate, useSearchParams } from "react-router";
import { eq } from "drizzle-orm";
import FormatResult from "../utils/Service.jsx";
import Footer from '../component/Footer.jsx'

function AddListing() {
  const [formData, setformData] = useState({});
  const [featuresData, setFeatureData] = useState({});
  const [triggerUploadImage, setTriggerUploadImage] = useState();
  const [searchParams] = useSearchParams();
  const [editCarInfo, setEditCarInfo] = useState();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const mode = searchParams.get('mode');
  const recotdId = searchParams.get('id');

  useEffect(() => {
    if (mode === 'edit') {
      GetList();
    }
  }, []);

  const GetList = async () => {
    const result = await db.select().from(CarListing)
      .innerJoin(CarImage, eq(CarListing.id, CarImage.carListingId))
      .where(eq(CarListing.id, recotdId));

    const formateEditData = FormatResult(result);

    console.log("formateEditData", formateEditData);

    setEditCarInfo(formateEditData[0]);
    setFeatureData(formateEditData[0]?.features);
    setformData(formateEditData[0]);
  };

  const handleInputChange = (name, value) => {
    setformData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", 
    }));
  };

  const handleFeaturesChange = (name, value) => {
    setFeatureData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let newErrors ={};
    cardetails.carDetails.forEach(item => {
      if (item.required && !formData[item.name]) {
        newErrors[item.name] = `${item.label}`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    
    if (!validateForm()) {
      console.log("Validation failed.");
      return;
    }

    try {
      if (mode === "edit") {
        const updateEditData = await db.update(CarListing).set({
          ...formData,
          features: featuresData,
        }).where(eq(CarListing.id, recotdId)).returning({ id: CarListing.id });
        navigate('/profile');
      } else {
        const result = await db.insert(CarListing).values({
          ...formData,
          features: featuresData,
        }).returning({ id: CarListing.id });

        if (result) {
          setTriggerUploadImage(result[0]?.id);
          navigate('/profile');
        }
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto relative">
      <Header />
      <div className="px-10 md:px-20 my-10">
        <h2 className="font-bold text-4xl">Add New Listing</h2>
        <form onSubmit={onSubmit}>
          <div className="p-10 border rounded-xl mt-10">
            <h2 className="font-bold text-2xl mb-6">Car Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {cardetails.carDetails.map((item, index) => (
                <div className="flex gap-0 justify-between" key={index}>
                  <label className="font-semibold">
                    {item?.label}{" "}
                    {item.required && <span className="text-red-600">*</span>}
                  </label>
                  {item.fieldType === "text" || item.fieldType === "number" ? (
                    <InputBox
                      item={item}
                      handleInputChange={handleInputChange}
                      editCarInfo={editCarInfo}
                      errorMessage={errors[item.name]}
                    />
                  ) : item.fieldType === "dropdown" ? (
                    <Dropdown
                      item={item}
                      handleInputChange={handleInputChange}
                      editCarInfo={editCarInfo}
                      errorMessage={errors[item.name]}
                    />
                  ) : item.fieldType === "textarea" ? (
                    <TextareaField
                      item={item}
                      handleInputChange={handleInputChange}
                      editCarInfo={editCarInfo}
                    />
                  ) : null}
                  {errors[item.name] && <span className="text-red-500">{errors[item.name]}</span>}
                </div>
              ))}
            </div>
            {/* Features Area */}
            <div>
              <h2 className="font-bold text-xl pb-5">Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {features.features.map((item, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <CheckBox
                      item={item}
                      handleFeaturesChange={handleFeaturesChange}
                      featuresData={featuresData}
                    />
                    <label>{item.label}</label>
                  </div>
                ))}
              </div>
            </div>
            {/* Car Image Area */}
            <UploadImage
              triggerUploadImage={triggerUploadImage}
              editCarInfo={editCarInfo}
              mode={mode}
            />
            <div className="mt-2 flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 text-white px-5 py-2 rounded-2xl"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
}

export default AddListing;
