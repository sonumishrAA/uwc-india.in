import React from "react";
import "./Cards.css";
import Card from "./Card";

function Cards() {
  return (
    <div className="Cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card
        title="Carpentry Services"
        discription="Transform your space with expert carpentry! Our skilled carpenters specialize in furniture, repairs, and custom designs, delivering precision, quality, and reliable service for all your woodwork needs."
        CTA="Hire Carpenter"
        src="https://tse1.mm.bing.net/th?id=OIG4.Ut_gFpO.AAKd7AWf6PG8&pid=ImgGn"
        hindiTitle="बढ़ई सेवाएं"
        hindiDescription="अपने स्थान को विशेषज्ञ बढ़ईगीरी से बदलें! हमारे कुशल बढ़ई फर्नीचर, मरम्मत, और कस्टम डिज़ाइन में विशेषज्ञता रखते हैं, जो आपके सभी लकड़ी के काम की ज़रूरतों के लिए सटीकता, गुणवत्ता, और विश्वसनीय सेवा प्रदान करते हैं।"
        hindiCTA="बढ़ई किराए पर लें"
      />

      <Card
        title="Plumber Services"
        discription="Ensure smooth plumbing operations with our professional plumbing services. We handle everything from repairs to installations with expertise and reliability."
        CTA="Hire Plumber"
        src="https://tse2.mm.bing.net/th?id=OIG3.yL1DSCoV8gd_KTmvz.m9&pid=ImgGn"
        hindiTitle="प्लंबर सेवाएं"
        hindiDescription="हमारी पेशेवर प्लंबिंग सेवाओं के साथ प्लंबिंग संचालन को सुचारू रखें। हम मरम्मत से लेकर स्थापना तक सब कुछ विशेषज्ञता और विश्वसनीयता के साथ संभालते हैं।"
        hindiCTA="प्लंबर किराए पर लें"
      />

      <Card
        title="Mason Services"
        discription="Get skilled masonry services for your construction needs. Our masons provide high-quality craftsmanship for walls, structures, and more."
        CTA="Hire Mason"
        src="https://tse2.mm.bing.net/th?id=OIG1._GMa70gkJXskAMrvbHPZ&pid=ImgGn"
        hindiTitle="राजगीर सेवाएं"
        hindiDescription="अपने निर्माण की ज़रूरतों के लिए कुशल राजगीर सेवाएं प्राप्त करें। हमारे राजगीर दीवारों, संरचनाओं, और अधिक के लिए उच्च गुणवत्ता वाली शिल्पकला प्रदान करते हैं।"
        hindiCTA="राजगीर किराए पर लें"
      />
    </div>
  );
}

export default Cards;
