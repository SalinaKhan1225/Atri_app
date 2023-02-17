import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Carousel } from "@atrilabs/react-component-manifests/src/manifests/Carousel/Carousel.tsx";
import { useheaderCb, useheader_detailCb, useheader_logoCb, useheader_menuCb, useheader_buttonCb, usesectionCb, usesection_detailCb, usesection_buttonCb, usesection_imgCb, usehomeCb, usehome_containerCb, usehome_contentCb, usehome_buttonCb, usehome_imgCb, useAboutCb, useabout_imgCb, useabout_img_containerCb, useabout_detail_containerCb, useabout_detail_container_1Cb, useabout_detail_container_2Cb, useabout_detail_container_3Cb, useabout_containerCb, useabout_buttonCb, useinstagramCb, useinstagram_headCb, useinstagram_contentCb, useinstagram_containerCb, useinstagram_container_1Cb, useinstagram_container_2Cb, usecategoryCb, usecategory_contentCb, useFlex30Cb, useFlex31Cb, useFlex32Cb, useFlex33Cb, usecategory_buttonCb, usefooterCb, usefooter_detailsCb, usefooter_starsCb, usefooter_listCb, usefooter_list_2Cb, usefooter_list_1Cb, usefooter_imgCb, usefooter_img_1Cb, usefooter_img_2Cb, useSponsorCb, usesponsor_imgCb, usemenuCb, usemenu_containerCb, usemenu_container_1Cb, useproduct_cart_1Cb, useDiv6Cb, useproduct_cart_2Cb, useDiv7Cb, useproduct_cart_3Cb, useDiv8Cb, useproduct_cart_4Cb, useDiv9Cb, usemenu_container_2Cb, useproduct_cart_5Cb, useDiv10Cb, useproduct_cart_6Cb, useDiv11Cb, useproduct_cart_7Cb, useDiv12Cb, useproduct_cart_8Cb, useDiv13Cb, usemenu_buttonCb, usereviewCb, usereview_buttonCb, usereview_detailCb, usereview_arrow_1Cb, usereview_contentCb, usereview_starsCb, usereview_imgCb, usereview_img_detailCb, usereview_arrow_2Cb, useImage16Cb, useTextBox2Cb, useTextBox3Cb, useTextBox4Cb, useTextBox5Cb, useTextBox6Cb, useButton1Cb, useButton2Cb, useTextBox8Cb, useTextBox9Cb, useButton3Cb, useButton4Cb, useImage3Cb, useTextBox10Cb, useTextBox11Cb, useTextBox12Cb, useButton5Cb, useButton6Cb, useImage4Cb, useImage5Cb, useTextBox16Cb, useImage6Cb, useTextBox17Cb, useImage9Cb, useTextBox19Cb, useTextBox18Cb, useImage8Cb, useTextBox13Cb, useTextBox14Cb, useTextBox15Cb, useButton7Cb, useButton8Cb, useTextBox20Cb, useButton9Cb, useImage10Cb, useImage11Cb, useImage14Cb, useImage15Cb, useImage12Cb, useImage13Cb, useTextBox21Cb, useImage17Cb, useTextBox22Cb, useTextBox23Cb, useTextBox24Cb, useImage18Cb, useTextBox25Cb, useTextBox28Cb, useTextBox31Cb, useImage19Cb, useTextBox26Cb, useTextBox29Cb, useTextBox30Cb, useImage20Cb, useTextBox27Cb, useTextBox32Cb, useTextBox33Cb, useButton10Cb, useButton11Cb, useImage21Cb, useTextBox35Cb, useImage22Cb, useImage23Cb, useImage24Cb, useImage25Cb, useImage26Cb, useTextBox45Cb, useTextBox46Cb, useTextBox47Cb, useTextBox48Cb, useTextBox49Cb, useTextBox50Cb, useTextBox51Cb, useTextBox52Cb, useTextBox36Cb, useTextBox37Cb, useTextBox38Cb, useTextBox39Cb, useTextBox40Cb, useTextBox41Cb, useTextBox42Cb, useTextBox44Cb, useTextBox34Cb, useImage27Cb, useImage28Cb, useImage29Cb, useImage30Cb, useTextBox53Cb, useImage31Cb, useImage32Cb, useImage33Cb, useImage34Cb, useTextBox54Cb, useTextBox55Cb, useImage35Cb, useTextBox56Cb, useTextBox57Cb, useTextBox76Cb, useImage36Cb, useTextBox58Cb, useTextBox59Cb, useTextBox77Cb, useImage37Cb, useTextBox60Cb, useTextBox61Cb, useTextBox78Cb, useImage38Cb, useTextBox62Cb, useTextBox63Cb, useTextBox79Cb, useImage39Cb, useTextBox64Cb, useTextBox65Cb, useTextBox72Cb, useImage40Cb, useTextBox66Cb, useTextBox67Cb, useTextBox73Cb, useImage41Cb, useTextBox68Cb, useTextBox69Cb, useTextBox74Cb, useImage42Cb, useTextBox70Cb, useTextBox71Cb, useTextBox75Cb, useButton12Cb, useButton13Cb, useTextBox80Cb, useTextBox81Cb, useTextBox82Cb, useCarousel1Cb, useCarousel2Cb, useCarousel3Cb, useButton14Cb, useButton15Cb, useImage49Cb, useTextBox83Cb, useTextBox84Cb, useImage43Cb, useImage44Cb, useImage45Cb, useImage46Cb, useImage47Cb, useImage48Cb, useTextBox85Cb, useTextBox86Cb, useImage50Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const headerProps = useStore((state)=>state["Home"]["header"]);
const headerIoProps = useIoStore((state)=>state["Home"]["header"]);
const headerCb = useheaderCb()
const header_detailProps = useStore((state)=>state["Home"]["header_detail"]);
const header_detailIoProps = useIoStore((state)=>state["Home"]["header_detail"]);
const header_detailCb = useheader_detailCb()
const header_logoProps = useStore((state)=>state["Home"]["header_logo"]);
const header_logoIoProps = useIoStore((state)=>state["Home"]["header_logo"]);
const header_logoCb = useheader_logoCb()
const header_menuProps = useStore((state)=>state["Home"]["header_menu"]);
const header_menuIoProps = useIoStore((state)=>state["Home"]["header_menu"]);
const header_menuCb = useheader_menuCb()
const header_buttonProps = useStore((state)=>state["Home"]["header_button"]);
const header_buttonIoProps = useIoStore((state)=>state["Home"]["header_button"]);
const header_buttonCb = useheader_buttonCb()
const sectionProps = useStore((state)=>state["Home"]["section"]);
const sectionIoProps = useIoStore((state)=>state["Home"]["section"]);
const sectionCb = usesectionCb()
const section_detailProps = useStore((state)=>state["Home"]["section_detail"]);
const section_detailIoProps = useIoStore((state)=>state["Home"]["section_detail"]);
const section_detailCb = usesection_detailCb()
const section_buttonProps = useStore((state)=>state["Home"]["section_button"]);
const section_buttonIoProps = useIoStore((state)=>state["Home"]["section_button"]);
const section_buttonCb = usesection_buttonCb()
const section_imgProps = useStore((state)=>state["Home"]["section_img"]);
const section_imgIoProps = useIoStore((state)=>state["Home"]["section_img"]);
const section_imgCb = usesection_imgCb()
const homeProps = useStore((state)=>state["Home"]["home"]);
const homeIoProps = useIoStore((state)=>state["Home"]["home"]);
const homeCb = usehomeCb()
const home_containerProps = useStore((state)=>state["Home"]["home_container"]);
const home_containerIoProps = useIoStore((state)=>state["Home"]["home_container"]);
const home_containerCb = usehome_containerCb()
const home_contentProps = useStore((state)=>state["Home"]["home_content"]);
const home_contentIoProps = useIoStore((state)=>state["Home"]["home_content"]);
const home_contentCb = usehome_contentCb()
const home_buttonProps = useStore((state)=>state["Home"]["home_button"]);
const home_buttonIoProps = useIoStore((state)=>state["Home"]["home_button"]);
const home_buttonCb = usehome_buttonCb()
const home_imgProps = useStore((state)=>state["Home"]["home_img"]);
const home_imgIoProps = useIoStore((state)=>state["Home"]["home_img"]);
const home_imgCb = usehome_imgCb()
const AboutProps = useStore((state)=>state["Home"]["About"]);
const AboutIoProps = useIoStore((state)=>state["Home"]["About"]);
const AboutCb = useAboutCb()
const about_imgProps = useStore((state)=>state["Home"]["about_img"]);
const about_imgIoProps = useIoStore((state)=>state["Home"]["about_img"]);
const about_imgCb = useabout_imgCb()
const about_img_containerProps = useStore((state)=>state["Home"]["about_img_container"]);
const about_img_containerIoProps = useIoStore((state)=>state["Home"]["about_img_container"]);
const about_img_containerCb = useabout_img_containerCb()
const about_detail_containerProps = useStore((state)=>state["Home"]["about_detail_container"]);
const about_detail_containerIoProps = useIoStore((state)=>state["Home"]["about_detail_container"]);
const about_detail_containerCb = useabout_detail_containerCb()
const about_detail_container_1Props = useStore((state)=>state["Home"]["about_detail_container_1"]);
const about_detail_container_1IoProps = useIoStore((state)=>state["Home"]["about_detail_container_1"]);
const about_detail_container_1Cb = useabout_detail_container_1Cb()
const about_detail_container_2Props = useStore((state)=>state["Home"]["about_detail_container_2"]);
const about_detail_container_2IoProps = useIoStore((state)=>state["Home"]["about_detail_container_2"]);
const about_detail_container_2Cb = useabout_detail_container_2Cb()
const about_detail_container_3Props = useStore((state)=>state["Home"]["about_detail_container_3"]);
const about_detail_container_3IoProps = useIoStore((state)=>state["Home"]["about_detail_container_3"]);
const about_detail_container_3Cb = useabout_detail_container_3Cb()
const about_containerProps = useStore((state)=>state["Home"]["about_container"]);
const about_containerIoProps = useIoStore((state)=>state["Home"]["about_container"]);
const about_containerCb = useabout_containerCb()
const about_buttonProps = useStore((state)=>state["Home"]["about_button"]);
const about_buttonIoProps = useIoStore((state)=>state["Home"]["about_button"]);
const about_buttonCb = useabout_buttonCb()
const instagramProps = useStore((state)=>state["Home"]["instagram"]);
const instagramIoProps = useIoStore((state)=>state["Home"]["instagram"]);
const instagramCb = useinstagramCb()
const instagram_headProps = useStore((state)=>state["Home"]["instagram_head"]);
const instagram_headIoProps = useIoStore((state)=>state["Home"]["instagram_head"]);
const instagram_headCb = useinstagram_headCb()
const instagram_contentProps = useStore((state)=>state["Home"]["instagram_content"]);
const instagram_contentIoProps = useIoStore((state)=>state["Home"]["instagram_content"]);
const instagram_contentCb = useinstagram_contentCb()
const instagram_containerProps = useStore((state)=>state["Home"]["instagram_container"]);
const instagram_containerIoProps = useIoStore((state)=>state["Home"]["instagram_container"]);
const instagram_containerCb = useinstagram_containerCb()
const instagram_container_1Props = useStore((state)=>state["Home"]["instagram_container_1"]);
const instagram_container_1IoProps = useIoStore((state)=>state["Home"]["instagram_container_1"]);
const instagram_container_1Cb = useinstagram_container_1Cb()
const instagram_container_2Props = useStore((state)=>state["Home"]["instagram_container_2"]);
const instagram_container_2IoProps = useIoStore((state)=>state["Home"]["instagram_container_2"]);
const instagram_container_2Cb = useinstagram_container_2Cb()
const categoryProps = useStore((state)=>state["Home"]["category"]);
const categoryIoProps = useIoStore((state)=>state["Home"]["category"]);
const categoryCb = usecategoryCb()
const category_contentProps = useStore((state)=>state["Home"]["category_content"]);
const category_contentIoProps = useIoStore((state)=>state["Home"]["category_content"]);
const category_contentCb = usecategory_contentCb()
const Flex30Props = useStore((state)=>state["Home"]["Flex30"]);
const Flex30IoProps = useIoStore((state)=>state["Home"]["Flex30"]);
const Flex30Cb = useFlex30Cb()
const Flex31Props = useStore((state)=>state["Home"]["Flex31"]);
const Flex31IoProps = useIoStore((state)=>state["Home"]["Flex31"]);
const Flex31Cb = useFlex31Cb()
const Flex32Props = useStore((state)=>state["Home"]["Flex32"]);
const Flex32IoProps = useIoStore((state)=>state["Home"]["Flex32"]);
const Flex32Cb = useFlex32Cb()
const Flex33Props = useStore((state)=>state["Home"]["Flex33"]);
const Flex33IoProps = useIoStore((state)=>state["Home"]["Flex33"]);
const Flex33Cb = useFlex33Cb()
const category_buttonProps = useStore((state)=>state["Home"]["category_button"]);
const category_buttonIoProps = useIoStore((state)=>state["Home"]["category_button"]);
const category_buttonCb = usecategory_buttonCb()
const footerProps = useStore((state)=>state["Home"]["footer"]);
const footerIoProps = useIoStore((state)=>state["Home"]["footer"]);
const footerCb = usefooterCb()
const footer_detailsProps = useStore((state)=>state["Home"]["footer_details"]);
const footer_detailsIoProps = useIoStore((state)=>state["Home"]["footer_details"]);
const footer_detailsCb = usefooter_detailsCb()
const footer_starsProps = useStore((state)=>state["Home"]["footer_stars"]);
const footer_starsIoProps = useIoStore((state)=>state["Home"]["footer_stars"]);
const footer_starsCb = usefooter_starsCb()
const footer_listProps = useStore((state)=>state["Home"]["footer_list"]);
const footer_listIoProps = useIoStore((state)=>state["Home"]["footer_list"]);
const footer_listCb = usefooter_listCb()
const footer_list_2Props = useStore((state)=>state["Home"]["footer_list_2"]);
const footer_list_2IoProps = useIoStore((state)=>state["Home"]["footer_list_2"]);
const footer_list_2Cb = usefooter_list_2Cb()
const footer_list_1Props = useStore((state)=>state["Home"]["footer_list_1"]);
const footer_list_1IoProps = useIoStore((state)=>state["Home"]["footer_list_1"]);
const footer_list_1Cb = usefooter_list_1Cb()
const footer_imgProps = useStore((state)=>state["Home"]["footer_img"]);
const footer_imgIoProps = useIoStore((state)=>state["Home"]["footer_img"]);
const footer_imgCb = usefooter_imgCb()
const footer_img_1Props = useStore((state)=>state["Home"]["footer_img_1"]);
const footer_img_1IoProps = useIoStore((state)=>state["Home"]["footer_img_1"]);
const footer_img_1Cb = usefooter_img_1Cb()
const footer_img_2Props = useStore((state)=>state["Home"]["footer_img_2"]);
const footer_img_2IoProps = useIoStore((state)=>state["Home"]["footer_img_2"]);
const footer_img_2Cb = usefooter_img_2Cb()
const SponsorProps = useStore((state)=>state["Home"]["Sponsor"]);
const SponsorIoProps = useIoStore((state)=>state["Home"]["Sponsor"]);
const SponsorCb = useSponsorCb()
const sponsor_imgProps = useStore((state)=>state["Home"]["sponsor_img"]);
const sponsor_imgIoProps = useIoStore((state)=>state["Home"]["sponsor_img"]);
const sponsor_imgCb = usesponsor_imgCb()
const menuProps = useStore((state)=>state["Home"]["menu"]);
const menuIoProps = useIoStore((state)=>state["Home"]["menu"]);
const menuCb = usemenuCb()
const menu_containerProps = useStore((state)=>state["Home"]["menu_container"]);
const menu_containerIoProps = useIoStore((state)=>state["Home"]["menu_container"]);
const menu_containerCb = usemenu_containerCb()
const menu_container_1Props = useStore((state)=>state["Home"]["menu_container_1"]);
const menu_container_1IoProps = useIoStore((state)=>state["Home"]["menu_container_1"]);
const menu_container_1Cb = usemenu_container_1Cb()
const product_cart_1Props = useStore((state)=>state["Home"]["product_cart_1"]);
const product_cart_1IoProps = useIoStore((state)=>state["Home"]["product_cart_1"]);
const product_cart_1Cb = useproduct_cart_1Cb()
const Div6Props = useStore((state)=>state["Home"]["Div6"]);
const Div6IoProps = useIoStore((state)=>state["Home"]["Div6"]);
const Div6Cb = useDiv6Cb()
const product_cart_2Props = useStore((state)=>state["Home"]["product_cart_2"]);
const product_cart_2IoProps = useIoStore((state)=>state["Home"]["product_cart_2"]);
const product_cart_2Cb = useproduct_cart_2Cb()
const Div7Props = useStore((state)=>state["Home"]["Div7"]);
const Div7IoProps = useIoStore((state)=>state["Home"]["Div7"]);
const Div7Cb = useDiv7Cb()
const product_cart_3Props = useStore((state)=>state["Home"]["product_cart_3"]);
const product_cart_3IoProps = useIoStore((state)=>state["Home"]["product_cart_3"]);
const product_cart_3Cb = useproduct_cart_3Cb()
const Div8Props = useStore((state)=>state["Home"]["Div8"]);
const Div8IoProps = useIoStore((state)=>state["Home"]["Div8"]);
const Div8Cb = useDiv8Cb()
const product_cart_4Props = useStore((state)=>state["Home"]["product_cart_4"]);
const product_cart_4IoProps = useIoStore((state)=>state["Home"]["product_cart_4"]);
const product_cart_4Cb = useproduct_cart_4Cb()
const Div9Props = useStore((state)=>state["Home"]["Div9"]);
const Div9IoProps = useIoStore((state)=>state["Home"]["Div9"]);
const Div9Cb = useDiv9Cb()
const menu_container_2Props = useStore((state)=>state["Home"]["menu_container_2"]);
const menu_container_2IoProps = useIoStore((state)=>state["Home"]["menu_container_2"]);
const menu_container_2Cb = usemenu_container_2Cb()
const product_cart_5Props = useStore((state)=>state["Home"]["product_cart_5"]);
const product_cart_5IoProps = useIoStore((state)=>state["Home"]["product_cart_5"]);
const product_cart_5Cb = useproduct_cart_5Cb()
const Div10Props = useStore((state)=>state["Home"]["Div10"]);
const Div10IoProps = useIoStore((state)=>state["Home"]["Div10"]);
const Div10Cb = useDiv10Cb()
const product_cart_6Props = useStore((state)=>state["Home"]["product_cart_6"]);
const product_cart_6IoProps = useIoStore((state)=>state["Home"]["product_cart_6"]);
const product_cart_6Cb = useproduct_cart_6Cb()
const Div11Props = useStore((state)=>state["Home"]["Div11"]);
const Div11IoProps = useIoStore((state)=>state["Home"]["Div11"]);
const Div11Cb = useDiv11Cb()
const product_cart_7Props = useStore((state)=>state["Home"]["product_cart_7"]);
const product_cart_7IoProps = useIoStore((state)=>state["Home"]["product_cart_7"]);
const product_cart_7Cb = useproduct_cart_7Cb()
const Div12Props = useStore((state)=>state["Home"]["Div12"]);
const Div12IoProps = useIoStore((state)=>state["Home"]["Div12"]);
const Div12Cb = useDiv12Cb()
const product_cart_8Props = useStore((state)=>state["Home"]["product_cart_8"]);
const product_cart_8IoProps = useIoStore((state)=>state["Home"]["product_cart_8"]);
const product_cart_8Cb = useproduct_cart_8Cb()
const Div13Props = useStore((state)=>state["Home"]["Div13"]);
const Div13IoProps = useIoStore((state)=>state["Home"]["Div13"]);
const Div13Cb = useDiv13Cb()
const menu_buttonProps = useStore((state)=>state["Home"]["menu_button"]);
const menu_buttonIoProps = useIoStore((state)=>state["Home"]["menu_button"]);
const menu_buttonCb = usemenu_buttonCb()
const reviewProps = useStore((state)=>state["Home"]["review"]);
const reviewIoProps = useIoStore((state)=>state["Home"]["review"]);
const reviewCb = usereviewCb()
const review_buttonProps = useStore((state)=>state["Home"]["review_button"]);
const review_buttonIoProps = useIoStore((state)=>state["Home"]["review_button"]);
const review_buttonCb = usereview_buttonCb()
const review_detailProps = useStore((state)=>state["Home"]["review_detail"]);
const review_detailIoProps = useIoStore((state)=>state["Home"]["review_detail"]);
const review_detailCb = usereview_detailCb()
const review_arrow_1Props = useStore((state)=>state["Home"]["review_arrow_1"]);
const review_arrow_1IoProps = useIoStore((state)=>state["Home"]["review_arrow_1"]);
const review_arrow_1Cb = usereview_arrow_1Cb()
const review_contentProps = useStore((state)=>state["Home"]["review_content"]);
const review_contentIoProps = useIoStore((state)=>state["Home"]["review_content"]);
const review_contentCb = usereview_contentCb()
const review_starsProps = useStore((state)=>state["Home"]["review_stars"]);
const review_starsIoProps = useIoStore((state)=>state["Home"]["review_stars"]);
const review_starsCb = usereview_starsCb()
const review_imgProps = useStore((state)=>state["Home"]["review_img"]);
const review_imgIoProps = useIoStore((state)=>state["Home"]["review_img"]);
const review_imgCb = usereview_imgCb()
const review_img_detailProps = useStore((state)=>state["Home"]["review_img_detail"]);
const review_img_detailIoProps = useIoStore((state)=>state["Home"]["review_img_detail"]);
const review_img_detailCb = usereview_img_detailCb()
const review_arrow_2Props = useStore((state)=>state["Home"]["review_arrow_2"]);
const review_arrow_2IoProps = useIoStore((state)=>state["Home"]["review_arrow_2"]);
const review_arrow_2Cb = usereview_arrow_2Cb()
const Image16Props = useStore((state)=>state["Home"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["Home"]["Image16"]);
const Image16Cb = useImage16Cb()
const TextBox2Props = useStore((state)=>state["Home"]["TextBox2"]);
const TextBox2IoProps = useIoStore((state)=>state["Home"]["TextBox2"]);
const TextBox2Cb = useTextBox2Cb()
const TextBox3Props = useStore((state)=>state["Home"]["TextBox3"]);
const TextBox3IoProps = useIoStore((state)=>state["Home"]["TextBox3"]);
const TextBox3Cb = useTextBox3Cb()
const TextBox4Props = useStore((state)=>state["Home"]["TextBox4"]);
const TextBox4IoProps = useIoStore((state)=>state["Home"]["TextBox4"]);
const TextBox4Cb = useTextBox4Cb()
const TextBox5Props = useStore((state)=>state["Home"]["TextBox5"]);
const TextBox5IoProps = useIoStore((state)=>state["Home"]["TextBox5"]);
const TextBox5Cb = useTextBox5Cb()
const TextBox6Props = useStore((state)=>state["Home"]["TextBox6"]);
const TextBox6IoProps = useIoStore((state)=>state["Home"]["TextBox6"]);
const TextBox6Cb = useTextBox6Cb()
const Button1Props = useStore((state)=>state["Home"]["Button1"]);
const Button1IoProps = useIoStore((state)=>state["Home"]["Button1"]);
const Button1Cb = useButton1Cb()
const Button2Props = useStore((state)=>state["Home"]["Button2"]);
const Button2IoProps = useIoStore((state)=>state["Home"]["Button2"]);
const Button2Cb = useButton2Cb()
const TextBox8Props = useStore((state)=>state["Home"]["TextBox8"]);
const TextBox8IoProps = useIoStore((state)=>state["Home"]["TextBox8"]);
const TextBox8Cb = useTextBox8Cb()
const TextBox9Props = useStore((state)=>state["Home"]["TextBox9"]);
const TextBox9IoProps = useIoStore((state)=>state["Home"]["TextBox9"]);
const TextBox9Cb = useTextBox9Cb()
const Button3Props = useStore((state)=>state["Home"]["Button3"]);
const Button3IoProps = useIoStore((state)=>state["Home"]["Button3"]);
const Button3Cb = useButton3Cb()
const Button4Props = useStore((state)=>state["Home"]["Button4"]);
const Button4IoProps = useIoStore((state)=>state["Home"]["Button4"]);
const Button4Cb = useButton4Cb()
const Image3Props = useStore((state)=>state["Home"]["Image3"]);
const Image3IoProps = useIoStore((state)=>state["Home"]["Image3"]);
const Image3Cb = useImage3Cb()
const TextBox10Props = useStore((state)=>state["Home"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["Home"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const TextBox11Props = useStore((state)=>state["Home"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["Home"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const TextBox12Props = useStore((state)=>state["Home"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["Home"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const Button5Props = useStore((state)=>state["Home"]["Button5"]);
const Button5IoProps = useIoStore((state)=>state["Home"]["Button5"]);
const Button5Cb = useButton5Cb()
const Button6Props = useStore((state)=>state["Home"]["Button6"]);
const Button6IoProps = useIoStore((state)=>state["Home"]["Button6"]);
const Button6Cb = useButton6Cb()
const Image4Props = useStore((state)=>state["Home"]["Image4"]);
const Image4IoProps = useIoStore((state)=>state["Home"]["Image4"]);
const Image4Cb = useImage4Cb()
const Image5Props = useStore((state)=>state["Home"]["Image5"]);
const Image5IoProps = useIoStore((state)=>state["Home"]["Image5"]);
const Image5Cb = useImage5Cb()
const TextBox16Props = useStore((state)=>state["Home"]["TextBox16"]);
const TextBox16IoProps = useIoStore((state)=>state["Home"]["TextBox16"]);
const TextBox16Cb = useTextBox16Cb()
const Image6Props = useStore((state)=>state["Home"]["Image6"]);
const Image6IoProps = useIoStore((state)=>state["Home"]["Image6"]);
const Image6Cb = useImage6Cb()
const TextBox17Props = useStore((state)=>state["Home"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["Home"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const Image9Props = useStore((state)=>state["Home"]["Image9"]);
const Image9IoProps = useIoStore((state)=>state["Home"]["Image9"]);
const Image9Cb = useImage9Cb()
const TextBox19Props = useStore((state)=>state["Home"]["TextBox19"]);
const TextBox19IoProps = useIoStore((state)=>state["Home"]["TextBox19"]);
const TextBox19Cb = useTextBox19Cb()
const TextBox18Props = useStore((state)=>state["Home"]["TextBox18"]);
const TextBox18IoProps = useIoStore((state)=>state["Home"]["TextBox18"]);
const TextBox18Cb = useTextBox18Cb()
const Image8Props = useStore((state)=>state["Home"]["Image8"]);
const Image8IoProps = useIoStore((state)=>state["Home"]["Image8"]);
const Image8Cb = useImage8Cb()
const TextBox13Props = useStore((state)=>state["Home"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["Home"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const TextBox14Props = useStore((state)=>state["Home"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["Home"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const TextBox15Props = useStore((state)=>state["Home"]["TextBox15"]);
const TextBox15IoProps = useIoStore((state)=>state["Home"]["TextBox15"]);
const TextBox15Cb = useTextBox15Cb()
const Button7Props = useStore((state)=>state["Home"]["Button7"]);
const Button7IoProps = useIoStore((state)=>state["Home"]["Button7"]);
const Button7Cb = useButton7Cb()
const Button8Props = useStore((state)=>state["Home"]["Button8"]);
const Button8IoProps = useIoStore((state)=>state["Home"]["Button8"]);
const Button8Cb = useButton8Cb()
const TextBox20Props = useStore((state)=>state["Home"]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["Home"]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const Button9Props = useStore((state)=>state["Home"]["Button9"]);
const Button9IoProps = useIoStore((state)=>state["Home"]["Button9"]);
const Button9Cb = useButton9Cb()
const Image10Props = useStore((state)=>state["Home"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["Home"]["Image10"]);
const Image10Cb = useImage10Cb()
const Image11Props = useStore((state)=>state["Home"]["Image11"]);
const Image11IoProps = useIoStore((state)=>state["Home"]["Image11"]);
const Image11Cb = useImage11Cb()
const Image14Props = useStore((state)=>state["Home"]["Image14"]);
const Image14IoProps = useIoStore((state)=>state["Home"]["Image14"]);
const Image14Cb = useImage14Cb()
const Image15Props = useStore((state)=>state["Home"]["Image15"]);
const Image15IoProps = useIoStore((state)=>state["Home"]["Image15"]);
const Image15Cb = useImage15Cb()
const Image12Props = useStore((state)=>state["Home"]["Image12"]);
const Image12IoProps = useIoStore((state)=>state["Home"]["Image12"]);
const Image12Cb = useImage12Cb()
const Image13Props = useStore((state)=>state["Home"]["Image13"]);
const Image13IoProps = useIoStore((state)=>state["Home"]["Image13"]);
const Image13Cb = useImage13Cb()
const TextBox21Props = useStore((state)=>state["Home"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["Home"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const Image17Props = useStore((state)=>state["Home"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["Home"]["Image17"]);
const Image17Cb = useImage17Cb()
const TextBox22Props = useStore((state)=>state["Home"]["TextBox22"]);
const TextBox22IoProps = useIoStore((state)=>state["Home"]["TextBox22"]);
const TextBox22Cb = useTextBox22Cb()
const TextBox23Props = useStore((state)=>state["Home"]["TextBox23"]);
const TextBox23IoProps = useIoStore((state)=>state["Home"]["TextBox23"]);
const TextBox23Cb = useTextBox23Cb()
const TextBox24Props = useStore((state)=>state["Home"]["TextBox24"]);
const TextBox24IoProps = useIoStore((state)=>state["Home"]["TextBox24"]);
const TextBox24Cb = useTextBox24Cb()
const Image18Props = useStore((state)=>state["Home"]["Image18"]);
const Image18IoProps = useIoStore((state)=>state["Home"]["Image18"]);
const Image18Cb = useImage18Cb()
const TextBox25Props = useStore((state)=>state["Home"]["TextBox25"]);
const TextBox25IoProps = useIoStore((state)=>state["Home"]["TextBox25"]);
const TextBox25Cb = useTextBox25Cb()
const TextBox28Props = useStore((state)=>state["Home"]["TextBox28"]);
const TextBox28IoProps = useIoStore((state)=>state["Home"]["TextBox28"]);
const TextBox28Cb = useTextBox28Cb()
const TextBox31Props = useStore((state)=>state["Home"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["Home"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const Image19Props = useStore((state)=>state["Home"]["Image19"]);
const Image19IoProps = useIoStore((state)=>state["Home"]["Image19"]);
const Image19Cb = useImage19Cb()
const TextBox26Props = useStore((state)=>state["Home"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["Home"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const TextBox29Props = useStore((state)=>state["Home"]["TextBox29"]);
const TextBox29IoProps = useIoStore((state)=>state["Home"]["TextBox29"]);
const TextBox29Cb = useTextBox29Cb()
const TextBox30Props = useStore((state)=>state["Home"]["TextBox30"]);
const TextBox30IoProps = useIoStore((state)=>state["Home"]["TextBox30"]);
const TextBox30Cb = useTextBox30Cb()
const Image20Props = useStore((state)=>state["Home"]["Image20"]);
const Image20IoProps = useIoStore((state)=>state["Home"]["Image20"]);
const Image20Cb = useImage20Cb()
const TextBox27Props = useStore((state)=>state["Home"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["Home"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const TextBox32Props = useStore((state)=>state["Home"]["TextBox32"]);
const TextBox32IoProps = useIoStore((state)=>state["Home"]["TextBox32"]);
const TextBox32Cb = useTextBox32Cb()
const TextBox33Props = useStore((state)=>state["Home"]["TextBox33"]);
const TextBox33IoProps = useIoStore((state)=>state["Home"]["TextBox33"]);
const TextBox33Cb = useTextBox33Cb()
const Button10Props = useStore((state)=>state["Home"]["Button10"]);
const Button10IoProps = useIoStore((state)=>state["Home"]["Button10"]);
const Button10Cb = useButton10Cb()
const Button11Props = useStore((state)=>state["Home"]["Button11"]);
const Button11IoProps = useIoStore((state)=>state["Home"]["Button11"]);
const Button11Cb = useButton11Cb()
const Image21Props = useStore((state)=>state["Home"]["Image21"]);
const Image21IoProps = useIoStore((state)=>state["Home"]["Image21"]);
const Image21Cb = useImage21Cb()
const TextBox35Props = useStore((state)=>state["Home"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["Home"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const Image22Props = useStore((state)=>state["Home"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["Home"]["Image22"]);
const Image22Cb = useImage22Cb()
const Image23Props = useStore((state)=>state["Home"]["Image23"]);
const Image23IoProps = useIoStore((state)=>state["Home"]["Image23"]);
const Image23Cb = useImage23Cb()
const Image24Props = useStore((state)=>state["Home"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["Home"]["Image24"]);
const Image24Cb = useImage24Cb()
const Image25Props = useStore((state)=>state["Home"]["Image25"]);
const Image25IoProps = useIoStore((state)=>state["Home"]["Image25"]);
const Image25Cb = useImage25Cb()
const Image26Props = useStore((state)=>state["Home"]["Image26"]);
const Image26IoProps = useIoStore((state)=>state["Home"]["Image26"]);
const Image26Cb = useImage26Cb()
const TextBox45Props = useStore((state)=>state["Home"]["TextBox45"]);
const TextBox45IoProps = useIoStore((state)=>state["Home"]["TextBox45"]);
const TextBox45Cb = useTextBox45Cb()
const TextBox46Props = useStore((state)=>state["Home"]["TextBox46"]);
const TextBox46IoProps = useIoStore((state)=>state["Home"]["TextBox46"]);
const TextBox46Cb = useTextBox46Cb()
const TextBox47Props = useStore((state)=>state["Home"]["TextBox47"]);
const TextBox47IoProps = useIoStore((state)=>state["Home"]["TextBox47"]);
const TextBox47Cb = useTextBox47Cb()
const TextBox48Props = useStore((state)=>state["Home"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["Home"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const TextBox49Props = useStore((state)=>state["Home"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["Home"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const TextBox50Props = useStore((state)=>state["Home"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["Home"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const TextBox51Props = useStore((state)=>state["Home"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["Home"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const TextBox52Props = useStore((state)=>state["Home"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["Home"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const TextBox36Props = useStore((state)=>state["Home"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["Home"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const TextBox37Props = useStore((state)=>state["Home"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["Home"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const TextBox38Props = useStore((state)=>state["Home"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["Home"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const TextBox39Props = useStore((state)=>state["Home"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["Home"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const TextBox40Props = useStore((state)=>state["Home"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["Home"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()
const TextBox41Props = useStore((state)=>state["Home"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["Home"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const TextBox42Props = useStore((state)=>state["Home"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["Home"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const TextBox44Props = useStore((state)=>state["Home"]["TextBox44"]);
const TextBox44IoProps = useIoStore((state)=>state["Home"]["TextBox44"]);
const TextBox44Cb = useTextBox44Cb()
const TextBox34Props = useStore((state)=>state["Home"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["Home"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const Image27Props = useStore((state)=>state["Home"]["Image27"]);
const Image27IoProps = useIoStore((state)=>state["Home"]["Image27"]);
const Image27Cb = useImage27Cb()
const Image28Props = useStore((state)=>state["Home"]["Image28"]);
const Image28IoProps = useIoStore((state)=>state["Home"]["Image28"]);
const Image28Cb = useImage28Cb()
const Image29Props = useStore((state)=>state["Home"]["Image29"]);
const Image29IoProps = useIoStore((state)=>state["Home"]["Image29"]);
const Image29Cb = useImage29Cb()
const Image30Props = useStore((state)=>state["Home"]["Image30"]);
const Image30IoProps = useIoStore((state)=>state["Home"]["Image30"]);
const Image30Cb = useImage30Cb()
const TextBox53Props = useStore((state)=>state["Home"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["Home"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const Image31Props = useStore((state)=>state["Home"]["Image31"]);
const Image31IoProps = useIoStore((state)=>state["Home"]["Image31"]);
const Image31Cb = useImage31Cb()
const Image32Props = useStore((state)=>state["Home"]["Image32"]);
const Image32IoProps = useIoStore((state)=>state["Home"]["Image32"]);
const Image32Cb = useImage32Cb()
const Image33Props = useStore((state)=>state["Home"]["Image33"]);
const Image33IoProps = useIoStore((state)=>state["Home"]["Image33"]);
const Image33Cb = useImage33Cb()
const Image34Props = useStore((state)=>state["Home"]["Image34"]);
const Image34IoProps = useIoStore((state)=>state["Home"]["Image34"]);
const Image34Cb = useImage34Cb()
const TextBox54Props = useStore((state)=>state["Home"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["Home"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const TextBox55Props = useStore((state)=>state["Home"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["Home"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const Image35Props = useStore((state)=>state["Home"]["Image35"]);
const Image35IoProps = useIoStore((state)=>state["Home"]["Image35"]);
const Image35Cb = useImage35Cb()
const TextBox56Props = useStore((state)=>state["Home"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["Home"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const TextBox57Props = useStore((state)=>state["Home"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["Home"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const TextBox76Props = useStore((state)=>state["Home"]["TextBox76"]);
const TextBox76IoProps = useIoStore((state)=>state["Home"]["TextBox76"]);
const TextBox76Cb = useTextBox76Cb()
const Image36Props = useStore((state)=>state["Home"]["Image36"]);
const Image36IoProps = useIoStore((state)=>state["Home"]["Image36"]);
const Image36Cb = useImage36Cb()
const TextBox58Props = useStore((state)=>state["Home"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["Home"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const TextBox59Props = useStore((state)=>state["Home"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["Home"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const TextBox77Props = useStore((state)=>state["Home"]["TextBox77"]);
const TextBox77IoProps = useIoStore((state)=>state["Home"]["TextBox77"]);
const TextBox77Cb = useTextBox77Cb()
const Image37Props = useStore((state)=>state["Home"]["Image37"]);
const Image37IoProps = useIoStore((state)=>state["Home"]["Image37"]);
const Image37Cb = useImage37Cb()
const TextBox60Props = useStore((state)=>state["Home"]["TextBox60"]);
const TextBox60IoProps = useIoStore((state)=>state["Home"]["TextBox60"]);
const TextBox60Cb = useTextBox60Cb()
const TextBox61Props = useStore((state)=>state["Home"]["TextBox61"]);
const TextBox61IoProps = useIoStore((state)=>state["Home"]["TextBox61"]);
const TextBox61Cb = useTextBox61Cb()
const TextBox78Props = useStore((state)=>state["Home"]["TextBox78"]);
const TextBox78IoProps = useIoStore((state)=>state["Home"]["TextBox78"]);
const TextBox78Cb = useTextBox78Cb()
const Image38Props = useStore((state)=>state["Home"]["Image38"]);
const Image38IoProps = useIoStore((state)=>state["Home"]["Image38"]);
const Image38Cb = useImage38Cb()
const TextBox62Props = useStore((state)=>state["Home"]["TextBox62"]);
const TextBox62IoProps = useIoStore((state)=>state["Home"]["TextBox62"]);
const TextBox62Cb = useTextBox62Cb()
const TextBox63Props = useStore((state)=>state["Home"]["TextBox63"]);
const TextBox63IoProps = useIoStore((state)=>state["Home"]["TextBox63"]);
const TextBox63Cb = useTextBox63Cb()
const TextBox79Props = useStore((state)=>state["Home"]["TextBox79"]);
const TextBox79IoProps = useIoStore((state)=>state["Home"]["TextBox79"]);
const TextBox79Cb = useTextBox79Cb()
const Image39Props = useStore((state)=>state["Home"]["Image39"]);
const Image39IoProps = useIoStore((state)=>state["Home"]["Image39"]);
const Image39Cb = useImage39Cb()
const TextBox64Props = useStore((state)=>state["Home"]["TextBox64"]);
const TextBox64IoProps = useIoStore((state)=>state["Home"]["TextBox64"]);
const TextBox64Cb = useTextBox64Cb()
const TextBox65Props = useStore((state)=>state["Home"]["TextBox65"]);
const TextBox65IoProps = useIoStore((state)=>state["Home"]["TextBox65"]);
const TextBox65Cb = useTextBox65Cb()
const TextBox72Props = useStore((state)=>state["Home"]["TextBox72"]);
const TextBox72IoProps = useIoStore((state)=>state["Home"]["TextBox72"]);
const TextBox72Cb = useTextBox72Cb()
const Image40Props = useStore((state)=>state["Home"]["Image40"]);
const Image40IoProps = useIoStore((state)=>state["Home"]["Image40"]);
const Image40Cb = useImage40Cb()
const TextBox66Props = useStore((state)=>state["Home"]["TextBox66"]);
const TextBox66IoProps = useIoStore((state)=>state["Home"]["TextBox66"]);
const TextBox66Cb = useTextBox66Cb()
const TextBox67Props = useStore((state)=>state["Home"]["TextBox67"]);
const TextBox67IoProps = useIoStore((state)=>state["Home"]["TextBox67"]);
const TextBox67Cb = useTextBox67Cb()
const TextBox73Props = useStore((state)=>state["Home"]["TextBox73"]);
const TextBox73IoProps = useIoStore((state)=>state["Home"]["TextBox73"]);
const TextBox73Cb = useTextBox73Cb()
const Image41Props = useStore((state)=>state["Home"]["Image41"]);
const Image41IoProps = useIoStore((state)=>state["Home"]["Image41"]);
const Image41Cb = useImage41Cb()
const TextBox68Props = useStore((state)=>state["Home"]["TextBox68"]);
const TextBox68IoProps = useIoStore((state)=>state["Home"]["TextBox68"]);
const TextBox68Cb = useTextBox68Cb()
const TextBox69Props = useStore((state)=>state["Home"]["TextBox69"]);
const TextBox69IoProps = useIoStore((state)=>state["Home"]["TextBox69"]);
const TextBox69Cb = useTextBox69Cb()
const TextBox74Props = useStore((state)=>state["Home"]["TextBox74"]);
const TextBox74IoProps = useIoStore((state)=>state["Home"]["TextBox74"]);
const TextBox74Cb = useTextBox74Cb()
const Image42Props = useStore((state)=>state["Home"]["Image42"]);
const Image42IoProps = useIoStore((state)=>state["Home"]["Image42"]);
const Image42Cb = useImage42Cb()
const TextBox70Props = useStore((state)=>state["Home"]["TextBox70"]);
const TextBox70IoProps = useIoStore((state)=>state["Home"]["TextBox70"]);
const TextBox70Cb = useTextBox70Cb()
const TextBox71Props = useStore((state)=>state["Home"]["TextBox71"]);
const TextBox71IoProps = useIoStore((state)=>state["Home"]["TextBox71"]);
const TextBox71Cb = useTextBox71Cb()
const TextBox75Props = useStore((state)=>state["Home"]["TextBox75"]);
const TextBox75IoProps = useIoStore((state)=>state["Home"]["TextBox75"]);
const TextBox75Cb = useTextBox75Cb()
const Button12Props = useStore((state)=>state["Home"]["Button12"]);
const Button12IoProps = useIoStore((state)=>state["Home"]["Button12"]);
const Button12Cb = useButton12Cb()
const Button13Props = useStore((state)=>state["Home"]["Button13"]);
const Button13IoProps = useIoStore((state)=>state["Home"]["Button13"]);
const Button13Cb = useButton13Cb()
const TextBox80Props = useStore((state)=>state["Home"]["TextBox80"]);
const TextBox80IoProps = useIoStore((state)=>state["Home"]["TextBox80"]);
const TextBox80Cb = useTextBox80Cb()
const TextBox81Props = useStore((state)=>state["Home"]["TextBox81"]);
const TextBox81IoProps = useIoStore((state)=>state["Home"]["TextBox81"]);
const TextBox81Cb = useTextBox81Cb()
const TextBox82Props = useStore((state)=>state["Home"]["TextBox82"]);
const TextBox82IoProps = useIoStore((state)=>state["Home"]["TextBox82"]);
const TextBox82Cb = useTextBox82Cb()
const Carousel1Props = useStore((state)=>state["Home"]["Carousel1"]);
const Carousel1IoProps = useIoStore((state)=>state["Home"]["Carousel1"]);
const Carousel1Cb = useCarousel1Cb()
const Carousel2Props = useStore((state)=>state["Home"]["Carousel2"]);
const Carousel2IoProps = useIoStore((state)=>state["Home"]["Carousel2"]);
const Carousel2Cb = useCarousel2Cb()
const Carousel3Props = useStore((state)=>state["Home"]["Carousel3"]);
const Carousel3IoProps = useIoStore((state)=>state["Home"]["Carousel3"]);
const Carousel3Cb = useCarousel3Cb()
const Button14Props = useStore((state)=>state["Home"]["Button14"]);
const Button14IoProps = useIoStore((state)=>state["Home"]["Button14"]);
const Button14Cb = useButton14Cb()
const Button15Props = useStore((state)=>state["Home"]["Button15"]);
const Button15IoProps = useIoStore((state)=>state["Home"]["Button15"]);
const Button15Cb = useButton15Cb()
const Image49Props = useStore((state)=>state["Home"]["Image49"]);
const Image49IoProps = useIoStore((state)=>state["Home"]["Image49"]);
const Image49Cb = useImage49Cb()
const TextBox83Props = useStore((state)=>state["Home"]["TextBox83"]);
const TextBox83IoProps = useIoStore((state)=>state["Home"]["TextBox83"]);
const TextBox83Cb = useTextBox83Cb()
const TextBox84Props = useStore((state)=>state["Home"]["TextBox84"]);
const TextBox84IoProps = useIoStore((state)=>state["Home"]["TextBox84"]);
const TextBox84Cb = useTextBox84Cb()
const Image43Props = useStore((state)=>state["Home"]["Image43"]);
const Image43IoProps = useIoStore((state)=>state["Home"]["Image43"]);
const Image43Cb = useImage43Cb()
const Image44Props = useStore((state)=>state["Home"]["Image44"]);
const Image44IoProps = useIoStore((state)=>state["Home"]["Image44"]);
const Image44Cb = useImage44Cb()
const Image45Props = useStore((state)=>state["Home"]["Image45"]);
const Image45IoProps = useIoStore((state)=>state["Home"]["Image45"]);
const Image45Cb = useImage45Cb()
const Image46Props = useStore((state)=>state["Home"]["Image46"]);
const Image46IoProps = useIoStore((state)=>state["Home"]["Image46"]);
const Image46Cb = useImage46Cb()
const Image47Props = useStore((state)=>state["Home"]["Image47"]);
const Image47IoProps = useIoStore((state)=>state["Home"]["Image47"]);
const Image47Cb = useImage47Cb()
const Image48Props = useStore((state)=>state["Home"]["Image48"]);
const Image48IoProps = useIoStore((state)=>state["Home"]["Image48"]);
const Image48Cb = useImage48Cb()
const TextBox85Props = useStore((state)=>state["Home"]["TextBox85"]);
const TextBox85IoProps = useIoStore((state)=>state["Home"]["TextBox85"]);
const TextBox85Cb = useTextBox85Cb()
const TextBox86Props = useStore((state)=>state["Home"]["TextBox86"]);
const TextBox86IoProps = useIoStore((state)=>state["Home"]["TextBox86"]);
const TextBox86Cb = useTextBox86Cb()
const Image50Props = useStore((state)=>state["Home"]["Image50"]);
const Image50IoProps = useIoStore((state)=>state["Home"]["Image50"]);
const Image50Cb = useImage50Cb()

  return (<>
  <Flex className="p-Home header bpt" {...headerProps} {...headerCb} {...headerIoProps}>
<Flex className="p-Home header_detail bpt" {...header_detailProps} {...header_detailCb} {...header_detailIoProps}>
<Div className="p-Home header_logo bpt" {...header_logoProps} {...header_logoCb} {...header_logoIoProps}>
<Image className="p-Home Image16 bpt" {...Image16Props} {...Image16Cb} {...Image16IoProps}/>
</Div>
<Flex className="p-Home header_menu bpt" {...header_menuProps} {...header_menuCb} {...header_menuIoProps}>
<TextBox className="p-Home TextBox3 bpt" {...TextBox3Props} {...TextBox3Cb} {...TextBox3IoProps}/>
<TextBox className="p-Home TextBox6 bpt" {...TextBox6Props} {...TextBox6Cb} {...TextBox6IoProps}/>
<TextBox className="p-Home TextBox5 bpt" {...TextBox5Props} {...TextBox5Cb} {...TextBox5IoProps}/>
<TextBox className="p-Home TextBox4 bpt" {...TextBox4Props} {...TextBox4Cb} {...TextBox4IoProps}/>
<TextBox className="p-Home TextBox2 bpt" {...TextBox2Props} {...TextBox2Cb} {...TextBox2IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home header_button bpt" {...header_buttonProps} {...header_buttonCb} {...header_buttonIoProps}>
<Button className="p-Home Button2 bpt" {...Button2Props} {...Button2Cb} {...Button2IoProps}/>
<Button className="p-Home Button1 bpt" {...Button1Props} {...Button1Cb} {...Button1IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home home bpt" {...homeProps} {...homeCb} {...homeIoProps}>
<Flex className="p-Home home_container bpt" {...home_containerProps} {...home_containerCb} {...home_containerIoProps}>
<Flex className="p-Home home_content bpt" {...home_contentProps} {...home_contentCb} {...home_contentIoProps}>
<TextBox className="p-Home TextBox12 bpt" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
<TextBox className="p-Home TextBox11 bpt" {...TextBox11Props} {...TextBox11Cb} {...TextBox11IoProps}/>
</Flex>
<TextBox className="p-Home TextBox10 bpt" {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
<Flex className="p-Home home_button bpt" {...home_buttonProps} {...home_buttonCb} {...home_buttonIoProps}>
<Button className="p-Home Button6 bpt" {...Button6Props} {...Button6Cb} {...Button6IoProps}/>
<Button className="p-Home Button5 bpt" {...Button5Props} {...Button5Cb} {...Button5IoProps}/>
</Flex>
</Flex>
<Div className="p-Home home_img bpt" {...home_imgProps} {...home_imgCb} {...home_imgIoProps}>
<Image className="p-Home Image4 bpt" {...Image4Props} {...Image4Cb} {...Image4IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Sponsor bpt" {...SponsorProps} {...SponsorCb} {...SponsorIoProps}>
<TextBox className="p-Home TextBox53 bpt" {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
<Flex className="p-Home sponsor_img bpt" {...sponsor_imgProps} {...sponsor_imgCb} {...sponsor_imgIoProps}>
<Image className="p-Home Image31 bpt" {...Image31Props} {...Image31Cb} {...Image31IoProps}/>
<Image className="p-Home Image34 bpt" {...Image34Props} {...Image34Cb} {...Image34IoProps}/>
<Image className="p-Home Image33 bpt" {...Image33Props} {...Image33Cb} {...Image33IoProps}/>
<Image className="p-Home Image32 bpt" {...Image32Props} {...Image32Cb} {...Image32IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home category bpt" {...categoryProps} {...categoryCb} {...categoryIoProps}>
<TextBox className="p-Home TextBox21 bpt" {...TextBox21Props} {...TextBox21Cb} {...TextBox21IoProps}/>
<Flex className="p-Home category_content bpt" {...category_contentProps} {...category_contentCb} {...category_contentIoProps}>
<Flex className="p-Home Flex30 bpt" {...Flex30Props} {...Flex30Cb} {...Flex30IoProps}>
<Image className="p-Home Image17 bpt" {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
<TextBox className="p-Home TextBox22 bpt" {...TextBox22Props} {...TextBox22Cb} {...TextBox22IoProps}/>
<TextBox className="p-Home TextBox23 bpt" {...TextBox23Props} {...TextBox23Cb} {...TextBox23IoProps}/>
<TextBox className="p-Home TextBox24 bpt" {...TextBox24Props} {...TextBox24Cb} {...TextBox24IoProps}/>
</Flex>
<Flex className="p-Home Flex31 bpt" {...Flex31Props} {...Flex31Cb} {...Flex31IoProps}>
<Image className="p-Home Image18 bpt" {...Image18Props} {...Image18Cb} {...Image18IoProps}/>
<TextBox className="p-Home TextBox25 bpt" {...TextBox25Props} {...TextBox25Cb} {...TextBox25IoProps}/>
<TextBox className="p-Home TextBox28 bpt" {...TextBox28Props} {...TextBox28Cb} {...TextBox28IoProps}/>
<TextBox className="p-Home TextBox31 bpt" {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
</Flex>
<Flex className="p-Home Flex32 bpt" {...Flex32Props} {...Flex32Cb} {...Flex32IoProps}>
<Image className="p-Home Image19 bpt" {...Image19Props} {...Image19Cb} {...Image19IoProps}/>
<TextBox className="p-Home TextBox26 bpt" {...TextBox26Props} {...TextBox26Cb} {...TextBox26IoProps}/>
<TextBox className="p-Home TextBox29 bpt" {...TextBox29Props} {...TextBox29Cb} {...TextBox29IoProps}/>
<TextBox className="p-Home TextBox30 bpt" {...TextBox30Props} {...TextBox30Cb} {...TextBox30IoProps}/>
</Flex>
<Flex className="p-Home Flex33 bpt" {...Flex33Props} {...Flex33Cb} {...Flex33IoProps}>
<Image className="p-Home Image20 bpt" {...Image20Props} {...Image20Cb} {...Image20IoProps}/>
<TextBox className="p-Home TextBox32 bpt" {...TextBox32Props} {...TextBox32Cb} {...TextBox32IoProps}/>
<TextBox className="p-Home TextBox27 bpt" {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
<TextBox className="p-Home TextBox33 bpt" {...TextBox33Props} {...TextBox33Cb} {...TextBox33IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home category_button bpt" {...category_buttonProps} {...category_buttonCb} {...category_buttonIoProps}>
<Button className="p-Home Button11 bpt" {...Button11Props} {...Button11Cb} {...Button11IoProps}/>
<Button className="p-Home Button10 bpt" {...Button10Props} {...Button10Cb} {...Button10IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home About bpt" {...AboutProps} {...AboutCb} {...AboutIoProps}>
<Flex className="p-Home about_img bpt" {...about_imgProps} {...about_imgCb} {...about_imgIoProps}>
<Div className="p-Home about_img_container bpt" {...about_img_containerProps} {...about_img_containerCb} {...about_img_containerIoProps}>
<Image className="p-Home Image5 bpt" {...Image5Props} {...Image5Cb} {...Image5IoProps}/>
</Div>
<Flex className="p-Home about_detail_container bpt" {...about_detail_containerProps} {...about_detail_containerCb} {...about_detail_containerIoProps}>
<TextBox className="p-Home TextBox16 bpt" {...TextBox16Props} {...TextBox16Cb} {...TextBox16IoProps}/>
<Flex className="p-Home about_detail_container_1 bpt" {...about_detail_container_1Props} {...about_detail_container_1Cb} {...about_detail_container_1IoProps}>
<Image className="p-Home Image6 bpt" {...Image6Props} {...Image6Cb} {...Image6IoProps}/>
<TextBox className="p-Home TextBox17 bpt" {...TextBox17Props} {...TextBox17Cb} {...TextBox17IoProps}/>
</Flex>
<Flex className="p-Home about_detail_container_2 bpt" {...about_detail_container_2Props} {...about_detail_container_2Cb} {...about_detail_container_2IoProps}>
<Image className="p-Home Image9 bpt" {...Image9Props} {...Image9Cb} {...Image9IoProps}/>
<TextBox className="p-Home TextBox19 bpt" {...TextBox19Props} {...TextBox19Cb} {...TextBox19IoProps}/>
</Flex>
<Flex className="p-Home about_detail_container_3 bpt" {...about_detail_container_3Props} {...about_detail_container_3Cb} {...about_detail_container_3IoProps}>
<Image className="p-Home Image8 bpt" {...Image8Props} {...Image8Cb} {...Image8IoProps}/>
<TextBox className="p-Home TextBox18 bpt" {...TextBox18Props} {...TextBox18Cb} {...TextBox18IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home about_container bpt" {...about_containerProps} {...about_containerCb} {...about_containerIoProps}>
<TextBox className="p-Home TextBox15 bpt" {...TextBox15Props} {...TextBox15Cb} {...TextBox15IoProps}/>
<TextBox className="p-Home TextBox14 bpt" {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
<TextBox className="p-Home TextBox13 bpt" {...TextBox13Props} {...TextBox13Cb} {...TextBox13IoProps}/>
<Flex className="p-Home about_button bpt" {...about_buttonProps} {...about_buttonCb} {...about_buttonIoProps}>
<Button className="p-Home Button7 bpt" {...Button7Props} {...Button7Cb} {...Button7IoProps}/>
<Button className="p-Home Button8 bpt" {...Button8Props} {...Button8Cb} {...Button8IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home menu bpt" {...menuProps} {...menuCb} {...menuIoProps}>
<TextBox className="p-Home TextBox54 bpt" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
<TextBox className="p-Home TextBox55 bpt" {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
<Flex className="p-Home menu_container bpt" {...menu_containerProps} {...menu_containerCb} {...menu_containerIoProps}>
<Flex className="p-Home menu_container_1 bpt" {...menu_container_1Props} {...menu_container_1Cb} {...menu_container_1IoProps}>
<Flex className="p-Home product_cart_1 bpt" {...product_cart_1Props} {...product_cart_1Cb} {...product_cart_1IoProps}>
<Div className="p-Home Div6 bpt" {...Div6Props} {...Div6Cb} {...Div6IoProps}>
<TextBox className="p-Home TextBox76 bpt" {...TextBox76Props} {...TextBox76Cb} {...TextBox76IoProps}/>
</Div>
<Image className="p-Home Image35 bpt" {...Image35Props} {...Image35Cb} {...Image35IoProps}/>
<TextBox className="p-Home TextBox56 bpt" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
<TextBox className="p-Home TextBox57 bpt" {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
</Flex>
<Flex className="p-Home product_cart_2 bpt" {...product_cart_2Props} {...product_cart_2Cb} {...product_cart_2IoProps}>
<Div className="p-Home Div7 bpt" {...Div7Props} {...Div7Cb} {...Div7IoProps}>
<TextBox className="p-Home TextBox77 bpt" {...TextBox77Props} {...TextBox77Cb} {...TextBox77IoProps}/>
</Div>
<Image className="p-Home Image36 bpt" {...Image36Props} {...Image36Cb} {...Image36IoProps}/>
<TextBox className="p-Home TextBox58 bpt" {...TextBox58Props} {...TextBox58Cb} {...TextBox58IoProps}/>
<TextBox className="p-Home TextBox59 bpt" {...TextBox59Props} {...TextBox59Cb} {...TextBox59IoProps}/>
</Flex>
<Flex className="p-Home product_cart_3 bpt" {...product_cart_3Props} {...product_cart_3Cb} {...product_cart_3IoProps}>
<Div className="p-Home Div8 bpt" {...Div8Props} {...Div8Cb} {...Div8IoProps}>
<TextBox className="p-Home TextBox78 bpt" {...TextBox78Props} {...TextBox78Cb} {...TextBox78IoProps}/>
</Div>
<Image className="p-Home Image37 bpt" {...Image37Props} {...Image37Cb} {...Image37IoProps}/>
<TextBox className="p-Home TextBox60 bpt" {...TextBox60Props} {...TextBox60Cb} {...TextBox60IoProps}/>
<TextBox className="p-Home TextBox61 bpt" {...TextBox61Props} {...TextBox61Cb} {...TextBox61IoProps}/>
</Flex>
<Flex className="p-Home product_cart_4 bpt" {...product_cart_4Props} {...product_cart_4Cb} {...product_cart_4IoProps}>
<Div className="p-Home Div9 bpt" {...Div9Props} {...Div9Cb} {...Div9IoProps}>
<TextBox className="p-Home TextBox79 bpt" {...TextBox79Props} {...TextBox79Cb} {...TextBox79IoProps}/>
</Div>
<Image className="p-Home Image38 bpt" {...Image38Props} {...Image38Cb} {...Image38IoProps}/>
<TextBox className="p-Home TextBox62 bpt" {...TextBox62Props} {...TextBox62Cb} {...TextBox62IoProps}/>
<TextBox className="p-Home TextBox63 bpt" {...TextBox63Props} {...TextBox63Cb} {...TextBox63IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home menu_container_2 bpt" {...menu_container_2Props} {...menu_container_2Cb} {...menu_container_2IoProps}>
<Flex className="p-Home product_cart_5 bpt" {...product_cart_5Props} {...product_cart_5Cb} {...product_cart_5IoProps}>
<Div className="p-Home Div10 bpt" {...Div10Props} {...Div10Cb} {...Div10IoProps}>
<TextBox className="p-Home TextBox72 bpt" {...TextBox72Props} {...TextBox72Cb} {...TextBox72IoProps}/>
</Div>
<Image className="p-Home Image39 bpt" {...Image39Props} {...Image39Cb} {...Image39IoProps}/>
<TextBox className="p-Home TextBox65 bpt" {...TextBox65Props} {...TextBox65Cb} {...TextBox65IoProps}/>
<TextBox className="p-Home TextBox64 bpt" {...TextBox64Props} {...TextBox64Cb} {...TextBox64IoProps}/>
</Flex>
<Flex className="p-Home product_cart_6 bpt" {...product_cart_6Props} {...product_cart_6Cb} {...product_cart_6IoProps}>
<Div className="p-Home Div11 bpt" {...Div11Props} {...Div11Cb} {...Div11IoProps}>
<TextBox className="p-Home TextBox73 bpt" {...TextBox73Props} {...TextBox73Cb} {...TextBox73IoProps}/>
</Div>
<Image className="p-Home Image40 bpt" {...Image40Props} {...Image40Cb} {...Image40IoProps}/>
<TextBox className="p-Home TextBox66 bpt" {...TextBox66Props} {...TextBox66Cb} {...TextBox66IoProps}/>
<TextBox className="p-Home TextBox67 bpt" {...TextBox67Props} {...TextBox67Cb} {...TextBox67IoProps}/>
</Flex>
<Flex className="p-Home product_cart_7 bpt" {...product_cart_7Props} {...product_cart_7Cb} {...product_cart_7IoProps}>
<Div className="p-Home Div12 bpt" {...Div12Props} {...Div12Cb} {...Div12IoProps}>
<TextBox className="p-Home TextBox74 bpt" {...TextBox74Props} {...TextBox74Cb} {...TextBox74IoProps}/>
</Div>
<Image className="p-Home Image41 bpt" {...Image41Props} {...Image41Cb} {...Image41IoProps}/>
<TextBox className="p-Home TextBox68 bpt" {...TextBox68Props} {...TextBox68Cb} {...TextBox68IoProps}/>
<TextBox className="p-Home TextBox69 bpt" {...TextBox69Props} {...TextBox69Cb} {...TextBox69IoProps}/>
</Flex>
<Flex className="p-Home product_cart_8 bpt" {...product_cart_8Props} {...product_cart_8Cb} {...product_cart_8IoProps}>
<Div className="p-Home Div13 bpt" {...Div13Props} {...Div13Cb} {...Div13IoProps}>
<TextBox className="p-Home TextBox75 bpt" {...TextBox75Props} {...TextBox75Cb} {...TextBox75IoProps}/>
</Div>
<Image className="p-Home Image42 bpt" {...Image42Props} {...Image42Cb} {...Image42IoProps}/>
<TextBox className="p-Home TextBox70 bpt" {...TextBox70Props} {...TextBox70Cb} {...TextBox70IoProps}/>
<TextBox className="p-Home TextBox71 bpt" {...TextBox71Props} {...TextBox71Cb} {...TextBox71IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home menu_button bpt" {...menu_buttonProps} {...menu_buttonCb} {...menu_buttonIoProps}>
<Button className="p-Home Button12 bpt" {...Button12Props} {...Button12Cb} {...Button12IoProps}/>
<Button className="p-Home Button13 bpt" {...Button13Props} {...Button13Cb} {...Button13IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home section bpt" {...sectionProps} {...sectionCb} {...sectionIoProps}>
<Flex className="p-Home section_detail bpt" {...section_detailProps} {...section_detailCb} {...section_detailIoProps}>
<TextBox className="p-Home TextBox8 bpt" {...TextBox8Props} {...TextBox8Cb} {...TextBox8IoProps}/>
<TextBox className="p-Home TextBox9 bpt" {...TextBox9Props} {...TextBox9Cb} {...TextBox9IoProps}/>
<Flex className="p-Home section_button bpt" {...section_buttonProps} {...section_buttonCb} {...section_buttonIoProps}>
<Button className="p-Home Button4 bpt" {...Button4Props} {...Button4Cb} {...Button4IoProps}/>
<Button className="p-Home Button3 bpt" {...Button3Props} {...Button3Cb} {...Button3IoProps}/>
</Flex>
</Flex>
<Div className="p-Home section_img bpt" {...section_imgProps} {...section_imgCb} {...section_imgIoProps}>
<Image className="p-Home Image3 bpt" {...Image3Props} {...Image3Cb} {...Image3IoProps}/>
</Div>
</Flex>
<Flex className="p-Home review bpt" {...reviewProps} {...reviewCb} {...reviewIoProps}>
<TextBox className="p-Home TextBox82 bpt" {...TextBox82Props} {...TextBox82Cb} {...TextBox82IoProps}/>
<TextBox className="p-Home TextBox81 bpt" {...TextBox81Props} {...TextBox81Cb} {...TextBox81IoProps}/>
<TextBox className="p-Home TextBox80 bpt" {...TextBox80Props} {...TextBox80Cb} {...TextBox80IoProps}/>
<Flex className="p-Home review_detail bpt" {...review_detailProps} {...review_detailCb} {...review_detailIoProps}>
<Flex className="p-Home review_arrow_1 bpt" {...review_arrow_1Props} {...review_arrow_1Cb} {...review_arrow_1IoProps}>
<Image className="p-Home Image49 bpt" {...Image49Props} {...Image49Cb} {...Image49IoProps}/>
</Flex>
<Flex className="p-Home review_content bpt" {...review_contentProps} {...review_contentCb} {...review_contentIoProps}>
<Flex className="p-Home review_stars bpt" {...review_starsProps} {...review_starsCb} {...review_starsIoProps}>
<Image className="p-Home Image44 bpt" {...Image44Props} {...Image44Cb} {...Image44IoProps}/>
<Image className="p-Home Image47 bpt" {...Image47Props} {...Image47Cb} {...Image47IoProps}/>
<Image className="p-Home Image46 bpt" {...Image46Props} {...Image46Cb} {...Image46IoProps}/>
<Image className="p-Home Image45 bpt" {...Image45Props} {...Image45Cb} {...Image45IoProps}/>
<Image className="p-Home Image43 bpt" {...Image43Props} {...Image43Cb} {...Image43IoProps}/>
</Flex>
<TextBox className="p-Home TextBox83 bpt" {...TextBox83Props} {...TextBox83Cb} {...TextBox83IoProps}/>
<TextBox className="p-Home TextBox84 bpt" {...TextBox84Props} {...TextBox84Cb} {...TextBox84IoProps}/>
<Flex className="p-Home review_img bpt" {...review_imgProps} {...review_imgCb} {...review_imgIoProps}>
<Image className="p-Home Image48 bpt" {...Image48Props} {...Image48Cb} {...Image48IoProps}/>
<Flex className="p-Home review_img_detail bpt" {...review_img_detailProps} {...review_img_detailCb} {...review_img_detailIoProps}>
<TextBox className="p-Home TextBox85 bpt" {...TextBox85Props} {...TextBox85Cb} {...TextBox85IoProps}/>
<TextBox className="p-Home TextBox86 bpt" {...TextBox86Props} {...TextBox86Cb} {...TextBox86IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home review_arrow_2 bpt" {...review_arrow_2Props} {...review_arrow_2Cb} {...review_arrow_2IoProps}>
<Image className="p-Home Image50 bpt" {...Image50Props} {...Image50Cb} {...Image50IoProps}/>
</Flex>
</Flex>
<Carousel className="p-Home Carousel1 bpt" {...Carousel1Props} {...Carousel1Cb} {...Carousel1IoProps}/>
<Carousel className="p-Home Carousel2 bpt" {...Carousel2Props} {...Carousel2Cb} {...Carousel2IoProps}/>
<Carousel className="p-Home Carousel3 bpt" {...Carousel3Props} {...Carousel3Cb} {...Carousel3IoProps}/>
<Flex className="p-Home review_button bpt" {...review_buttonProps} {...review_buttonCb} {...review_buttonIoProps}>
<Button className="p-Home Button14 bpt" {...Button14Props} {...Button14Cb} {...Button14IoProps}/>
<Button className="p-Home Button15 bpt" {...Button15Props} {...Button15Cb} {...Button15IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home instagram bpt" {...instagramProps} {...instagramCb} {...instagramIoProps}>
<Flex className="p-Home instagram_head bpt" {...instagram_headProps} {...instagram_headCb} {...instagram_headIoProps}>
<TextBox className="p-Home TextBox20 bpt" {...TextBox20Props} {...TextBox20Cb} {...TextBox20IoProps}/>
<Button className="p-Home Button9 bpt" {...Button9Props} {...Button9Cb} {...Button9IoProps}/>
</Flex>
<Flex className="p-Home instagram_content bpt" {...instagram_contentProps} {...instagram_contentCb} {...instagram_contentIoProps}>
<Image className="p-Home Image10 bpt" {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
<Image className="p-Home Image11 bpt" {...Image11Props} {...Image11Cb} {...Image11IoProps}/>
<Flex className="p-Home instagram_container bpt" {...instagram_containerProps} {...instagram_containerCb} {...instagram_containerIoProps}>
<Flex className="p-Home instagram_container_1 bpt" {...instagram_container_1Props} {...instagram_container_1Cb} {...instagram_container_1IoProps}>
<Image className="p-Home Image15 bpt" {...Image15Props} {...Image15Cb} {...Image15IoProps}/>
<Image className="p-Home Image14 bpt" {...Image14Props} {...Image14Cb} {...Image14IoProps}/>
</Flex>
<Flex className="p-Home instagram_container_2 bpt" {...instagram_container_2Props} {...instagram_container_2Cb} {...instagram_container_2IoProps}>
<Image className="p-Home Image13 bpt" {...Image13Props} {...Image13Cb} {...Image13IoProps}/>
<Image className="p-Home Image12 bpt" {...Image12Props} {...Image12Cb} {...Image12IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home footer bpt" {...footerProps} {...footerCb} {...footerIoProps}>
<Flex className="p-Home footer_details bpt" {...footer_detailsProps} {...footer_detailsCb} {...footer_detailsIoProps}>
<Image className="p-Home Image21 bpt" {...Image21Props} {...Image21Cb} {...Image21IoProps}/>
<TextBox className="p-Home TextBox35 bpt" {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
<Flex className="p-Home footer_stars bpt" {...footer_starsProps} {...footer_starsCb} {...footer_starsIoProps}>
<Image className="p-Home Image25 bpt" {...Image25Props} {...Image25Cb} {...Image25IoProps}/>
<Image className="p-Home Image26 bpt" {...Image26Props} {...Image26Cb} {...Image26IoProps}/>
<Image className="p-Home Image24 bpt" {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
<Image className="p-Home Image23 bpt" {...Image23Props} {...Image23Cb} {...Image23IoProps}/>
<Image className="p-Home Image22 bpt" {...Image22Props} {...Image22Cb} {...Image22IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home footer_list bpt" {...footer_listProps} {...footer_listCb} {...footer_listIoProps}>
<Flex className="p-Home footer_list_1 bpt" {...footer_list_1Props} {...footer_list_1Cb} {...footer_list_1IoProps}>
<TextBox className="p-Home TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
<TextBox className="p-Home TextBox38 bpt" {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
<TextBox className="p-Home TextBox39 bpt" {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
<TextBox className="p-Home TextBox40 bpt" {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
<TextBox className="p-Home TextBox41 bpt" {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
<TextBox className="p-Home TextBox42 bpt" {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
<TextBox className="p-Home TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
<TextBox className="p-Home TextBox44 bpt" {...TextBox44Props} {...TextBox44Cb} {...TextBox44IoProps}/>
</Flex>
<Flex className="p-Home footer_list_2 bpt" {...footer_list_2Props} {...footer_list_2Cb} {...footer_list_2IoProps}>
<TextBox className="p-Home TextBox45 bpt" {...TextBox45Props} {...TextBox45Cb} {...TextBox45IoProps}/>
<TextBox className="p-Home TextBox46 bpt" {...TextBox46Props} {...TextBox46Cb} {...TextBox46IoProps}/>
<TextBox className="p-Home TextBox47 bpt" {...TextBox47Props} {...TextBox47Cb} {...TextBox47IoProps}/>
<TextBox className="p-Home TextBox48 bpt" {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
<TextBox className="p-Home TextBox49 bpt" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
<TextBox className="p-Home TextBox50 bpt" {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
<TextBox className="p-Home TextBox51 bpt" {...TextBox51Props} {...TextBox51Cb} {...TextBox51IoProps}/>
<TextBox className="p-Home TextBox52 bpt" {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home footer_img bpt" {...footer_imgProps} {...footer_imgCb} {...footer_imgIoProps}>
<TextBox className="p-Home TextBox34 bpt" {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
<Flex className="p-Home footer_img_1 bpt" {...footer_img_1Props} {...footer_img_1Cb} {...footer_img_1IoProps}>
<Image className="p-Home Image27 bpt" {...Image27Props} {...Image27Cb} {...Image27IoProps}/>
<Image className="p-Home Image28 bpt" {...Image28Props} {...Image28Cb} {...Image28IoProps}/>
</Flex>
<Flex className="p-Home footer_img_2 bpt" {...footer_img_2Props} {...footer_img_2Cb} {...footer_img_2IoProps}>
<Image className="p-Home Image29 bpt" {...Image29Props} {...Image29Cb} {...Image29IoProps}/>
<Image className="p-Home Image30 bpt" {...Image30Props} {...Image30Cb} {...Image30IoProps}/>
</Flex>
</Flex>
</Flex>
  </>);
}
