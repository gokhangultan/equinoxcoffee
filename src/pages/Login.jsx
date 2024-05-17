import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
import { useAuth } from "./AuthProvider"; // AuthProvider dosyanızın yolu

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const { login } = useAuth();

    const onSubmit = async (data) => {
        setIsLoading(true);
        const { email, password } = data;
        if (login(email, password)) {
            toast.success("Hoşgeldiniz!", {
                position: "top-right",
            });
            setTimeout(() => {
                history.push("/admin");
            }, 3000);
        } else {
            toast.error("Kullanıcı adı veya şifre yanlış!", {
                position: "top-right",
            });
            setIsLoading(false);
        }
    };

    return (
        <div className="my-20 px-[10px] lg:px-[250px]">
            <div className="breadcrumb flex md:justify-between justify-center md:flex-row flex-col gap-3 ">
                <div className="flex gap-2">
                    <Link to="/" className="font-bold text-sm leading-6 text-[#252B42] ">
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
                <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex-col flex bg-[#F9F9F9] md:px-[250px] px-[50px] py-[50px] gap-3 rounded-xl">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-textColor text-lg leading-6">Email *</h3>
                            <input
                                {...register("email", {
                                    required: true,
                                    pattern: /^\S+@\S+$/i,
                                })}
                                type="email"
                                placeholder="Email *"
                                className="form-input"
                            />
                            {errors.email && (
                                <span className="text-red-500 text-sm leading-7">
                                    Email Adresiniz Kayıtlı Değil.{" "}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-textColor text-lg leading-6">Password *</h3>
                            <input
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                })}
                                type="password"
                                placeholder="Password *"
                                className="form-input"
                            />
                            {errors.password && (
                                <span className="text-red-500 text-sm leading-7">
                                    Yanlış Şifre!
                                </span>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="text-sm font-bold leading-6 bg-primaryColor rounded px-5 py-3 text-black hover:text-primaryColor hover:bg-gray-400 border-1 border-primaryColor"
                            disabled={isLoading}
                        >
                            {isLoading ? "Giriş Yapılıyor..." : "Login"}
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
}
