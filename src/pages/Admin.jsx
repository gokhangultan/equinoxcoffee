import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
import axios from "axios"; // Axios import
import { addCoffee, deleteCoffee, fetchMenuData } from "../store/actions/coffeeActions"; // Ürün ekleme işlemi için gerekli action
import 'react-toastify/dist/ReactToastify.css';


export default function Admin() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const dispatch = useDispatch();

    const data = useSelector((store) => store.coffeeReducer.data);

    const isArray = Array.isArray(data);
    useEffect(() => {
        dispatch(fetchMenuData());
      }, [dispatch]);
    
    const onSubmit = async (data) => {
        try {
            const response = await axios.post("https://6646fe9151e227f23ab09393.mockapi.io/api/v1/equinoxmenu", data);
            if (response && (response.status === 200 || response.status === 201)) {
                const productData = response.data;
                dispatch(addCoffee(productData)); // Yeni ürünü redux store'a ekle
                toast.success("Ürün başarıyla eklendi!", {
                    position: "top-right",
                });
                reset(); // Formu temizle
            }
        } catch (error) {
            toast.error("Ürün ekleme başarısız oldu!", {
                position: "top-right",
            });
        }
    };

    const deleteProduct = async (id) => {
        try {
            const response = await axios.delete(`https://6646fe9151e227f23ab09393.mockapi.io/api/v1/equinoxmenu/${id}`);
            if (response && response.status === 200 || response.status === 204) {
                dispatch(deleteCoffee(id));
                toast.success("Ürün başarıyla silindi!", {
                    position: "top-right",
                });
            } else {
                toast.error("Ürün silme başarısız oldu!", {
                    position: "top-right",
                });
            }
        } catch (error) {
            console.error("Error deleting product:", error);
            toast.error("Ürün silme başarısız oldu!", {
                position: "top-right",
            });
        }
    };
    

    return (
        <div className="my-20 px-[10px] lg:px-[250px]">
            <div className="breadcrumb flex md:justify-between justify-center md:flex-row flex-col gap-3 ">
                <div className="flex gap-2">
                    <Link to="/" className="font-bold text-sm leading-6 text-white ">
                        Home
                    </Link>
                    <Link>
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            size="lg"
                            style={{ color: "#BDBDBD" }}
                        />{" "}
                    </Link>
                    <Link to="/menu" className="font-bold text-sm leading-6 text-[#BDBDBD]">
                        Back To Menu
                    </Link>
                </div>
            </div>
            <div className="flex flex-col items-center gap-4 ">
                <form id="productForm" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex-col flex bg-[#F9F9F9] md:px-[250px] px-[50px] py-[50px] gap-3 rounded-xl">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-textColor text-lg leading-6">Ürün İsmi *</h3>
                            <input
                                {...register("name", {
                                    required: true,
                                })}
                                type="text"
                                placeholder="Ürün İsmi *"
                                className="form-input"
                            />
                            {errors.name && (
                                <span className="text-red-500 text-sm leading-7">
                                    Ürün ismi gerekli.
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-textColor text-lg leading-6">Ürün Açıklaması *</h3>
                            <input
                                {...register("description", {
                                    required: true,
                                })}
                                type="text"
                                placeholder="Ürün Açıklaması *"
                                className="form-input"
                            />
                            {errors.description && (
                                <span className="text-red-500 text-sm leading-7">
                                    Ürün açıklaması gerekli.
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-textColor text-lg leading-6">Ürün Fiyatı *</h3>
                            <input
                                {...register("price", {
                                    required: true,
                                    valueAsNumber: true,
                                })}
                                type="number"
                                placeholder="Ürün Fiyatı *"
                                className="form-input"
                            />
                            {errors.price && (
                                <span className="text-red-500 text-sm leading-7">
                                    Ürün fiyatı gerekli.
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-textColor text-lg leading-6">Ürün Tipi *</h3>
                            <select
                                {...register("productType", {
                                    required: true,
                                })}
                                className="form-input"
                            >
                                 <option value="">Ürün Tipini Seçin</option>
                                <option value="3rdvawe">3rdvawe</option>
                                <option value="Espresso">Espresso</option>
                                <option value="Cold">Cold</option>
                                <option value="Snacks">Snacks</option>
                                <option value="Hot">Hot</option>
                                <option value="Cold Coffee">Cold Coffee</option>
                                <option value="Aromatic">Aromatic</option>
                            </select>
                            {errors.productType && (
                                <span className="text-red-500 text-sm leading-7">
                                    Ürün tipi gerekli.
                                </span>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="text-sm font-bold leading-6 bg-primaryColor rounded px-5 py-3 text-black hover:text-primaryColor hover:bg-gray-400 border-1 border-primaryColor"
                        >
                            Ürünü Ekle
                        </button>

                    </div>
                </form>
            </div>
               {/* Ürünler tablosu */}
        {isArray && data.length > 0 && (
          <div className="overflow-hidden rounded-md shadow mb-4 sm:min-h-[600px] m-auto w-full">
            <h2 className="text-xl font-bold mb-2 text-white">Ürünler</h2>
            <table className="w-full text-white">
              <thead className="bg-gray-500">
                <tr>
                  <th className="px-2.5 py-2.5">Name</th>
                  <th className="px-2.5 py-2.5">Description</th>
                  <th className="px-2.5 py-2.5">Price</th>
                  <th className="px-2.5 py-2.5">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td className="px-2.5 py-2.5">{item.name}</td>
                    <td className="px-2.5 py-2.5">{item.description}</td>
                    <td className="px-2.5 py-2.5">{item.price}</td>
                    <td className="px-2.5 py-2.5">
                      <div className="flex justify-end gap-2">
                      <button
                                                onClick={() => deleteProduct(item.id)}
                                                className="myButton bg-red-600 hover:bg-red-500 px-4 py-2 rounded-xl text-white"
                                            >
                                                SİL
                                            </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {!isArray && (
          <div className="text-center py-4">No data available</div>
        )}
        </div>
        
    );
}
