document.getElementById("input_field").addEventListener("click",function(event){
        const text= event.target.value;
        const Apply_button= document.getElementById("Apply_btn");
        if(text=== "SELL200"){
            Apply_button.removeAttribute("disabled")
            
        }
        else{
            Apply_button.setAttribute("disabled",true)
        }
})
// gap
document.getElementById("purchase_one").addEventListener("click",function(){
    const kaccessories=product("product-1_price")
    const kaccessories_value=TotalValue(kaccessories)
    const value=putValue("total",kaccessories_value)



                const product_title=document.getElementById("product-1_title");
                const Title=product_title.innerText;
                const OutputTitle=document.getElementById("output_title");
                const p=document.createElement("p")
                p.innerText=Title
                OutputTitle.appendChild(p)





 
    if(kaccessories_value >200 || kaccessories_value===200 ){
        const Apply_button= document.getElementById("Apply_btn");
        Apply_button.removeAttribute("disabled")
        document.getElementById("Apply_btn").addEventListener("click",function(){

                const kaccessories_discount=discount(kaccessories_value)
            const Discount=putValue("Discount",kaccessories_discount) 
                    // let kaccessories_discount=0;
                    const Total_Price=kaccessories_value-kaccessories_discount
                //     const total=putValue("final_total",kaccessories_value)
                    const Total=putValue("final_total",Total_Price)
                
            })
    }
    else{
const total=putValue("final_total",kaccessories_value)
    }

})
// 2nd one
document.getElementById("purchase_two").addEventListener("click",function(){
        
        const card_board=product("product-2_price")
        const card_board_value=TotalValue(card_board)
        const value=putValue("total",card_board_value)



        const product_title=document.getElementById("product-2_title");
        const Title=product_title.innerText;
        const OutputTitle=document.getElementById("output_title");
        const p=document.createElement("p")
        p.innerText=Title
        OutputTitle.appendChild(p)


        if(card_board_value >200 || card_board_value===200 ){
                // apply button enable
                const Apply_button= document.getElementById("Apply_btn");
        Apply_button.removeAttribute("disabled")  
        document.getElementById("Apply_btn").addEventListener("click",function(){

                // 20% er kahini
                        const card_board_discount=discount(card_board_value)
                        const Discount=putValue("Discount",card_board_discount) 
                
                        const Total_Price=card_board_value-card_board_discount
                    const Total=putValue("final_total",Total_Price)
                        // return card_board_value
                }) 
        }
        else{
                const total=putValue("final_total",card_board_value)   
        }

})
// 3rd one


document.getElementById("purchase_three").addEventListener("click",function(){
        const homecooker=product("product-3_price")
        const homecooker_value=TotalValue(homecooker)
        const value=putValue("total",homecooker_value)

        const product_title=document.getElementById("product-3_title");
        const Title=product_title.innerText;
        const OutputTitle=document.getElementById("output_title");
        const p=document.createElement("p")
        p.innerText=Title
        OutputTitle.appendChild(p)




        if(homecooker_value >200 || homecooker_value===200){
                const Apply_button= document.getElementById("Apply_btn");
                Apply_button.removeAttribute("disabled")
                document.getElementById("Apply_btn").addEventListener("click",function(){
                        // 20% er kahini
                               const homecooker_discount=discount(homecooker_value)
                               const Discount=putValue("Discount",homecooker_discount) 
                       
                               const Total_Price=homecooker_value-homecooker_discount
                           const Total=putValue("final_total",Total_Price)
                               // return homecooker_value
                })
        }
        else{
                const total=putValue("final_total",homecooker_value)  
                 
        }

})

// 4th one


document.getElementById("purchase_four").addEventListener("click",function(){
        const SportsBackCap=product("product-4_price")
        const SportsBackCap_value=TotalValue(SportsBackCap)
        const value=putValue("total",SportsBackCap_value)

        const product_title=document.getElementById("product-4_title");
        const Title=product_title.innerText;
        const OutputTitle=document.getElementById("output_title");
        const p=document.createElement("p")
        p.innerText=Title
        OutputTitle.appendChild(p)


        if(SportsBackCap_value >200 || SportsBackCap_value===200){
                const Apply_button= document.getElementById("Apply_btn");
                Apply_button.removeAttribute("disabled")
                document.getElementById("Apply_btn").addEventListener("click",function(){

                        // 20% er kahini
                                 
                                const SportsBackCap_discount=discount(SportsBackCap_value)
                                const Discount=putValue("Discount",SportsBackCap_discount) 
                        
                                const Total_Price=SportsBackCap_value-SportsBackCap_discount
                            const Total=putValue("final_total",Total_Price)
                                // return SportsBackCap_value
                        
                        })
        }
        else{
const total=putValue("final_total",SportsBackCap_value) 
 
        }

})

// 5th one



document.getElementById("purchase_five").addEventListener("click",function(){
        const FullJerseySet=product("product-5_price")
        const FullJerseySet_value=TotalValue(FullJerseySet)
        const value=putValue("total",FullJerseySet_value)

        const product_title=document.getElementById("product-5_title");
        const Title=product_title.innerText;
        const OutputTitle=document.getElementById("output_title");
        const p=document.createElement("p")
        p.innerText=Title
        OutputTitle.appendChild(p)





        if(FullJerseySet_value >200 || FullJerseySet_value===200){
                const Apply_button= document.getElementById("Apply_btn");
                Apply_button.removeAttribute("disabled")
                document.getElementById("Apply_btn").addEventListener("click",function(){

                        // 20% er kahini  
                               const FullJerseySet_discount=discount(FullJerseySet_value)
                               const Discount=putValue("Discount",FullJerseySet_discount) 
                       
                               const Total_Price=FullJerseySet_value-FullJerseySet_discount
                           const Total=putValue("final_total",Total_Price)
                               // return FullJerseySet_value
                       })
        }
        else{
const total=putValue("final_total",FullJerseySet_value)
        }

})



// 6th one



document.getElementById("purchase_six").addEventListener("click",function(){
        const sportscatest=product("product-6_price")
        const sportscatest_value=TotalValue(sportscatest)
       const value=putValue("total",sportscatest_value)

       const product_title=document.getElementById("product-6_title");
       const Title=product_title.innerText;
       const OutputTitle=document.getElementById("output_title");
       const p=document.createElement("p")
       p.innerText=Title
       OutputTitle.appendChild(p)







       if(sportscatest_value >200 || sportscatest_value===200){
        const Apply_button= document.getElementById("Apply_btn");
        Apply_button.removeAttribute("disabled")
        document.getElementById("Apply_btn").addEventListener("click",function(){

                // 20% er kahini    
                    const sportscatest_discount=discount(sportscatest_value)
                    const Discount=putValue("Discount",sportscatest_discount) 
             
                    const Total_Price=sportscatest_value-sportscatest_discount
                const Total=putValue("final_total",Total_Price)
                     // return sportscatest_value
             })
       }
else{
        const total=putValue("final_total",sportscatest_value)     
}
})
document.getElementById("go_home_btn").addEventListener("click",function(){
        location.href="index.html"   
})




