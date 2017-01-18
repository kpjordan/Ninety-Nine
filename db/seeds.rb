categories_list = ["Altbier","Alternative Grain Beer","Alternative Sugar Beer","Amber Kellerbier","American Amber Ale",
"American Barleywine","American Brown Ale","American IPA","American Lager","American Light Lager",
"American Pale Ale","American Porter","American Stout","American Strong Ale","American Wheat Beer",
"Australian Sparkling Ale","Autumn Seasonal Beer","Baltic Porter","Belgian Blond Ale","Belgian Dark Strong Ale",
"Belgian Dubbel","Belgian Golden Strong Ale","Belgian Pale Ale","Belgian Tripel","Berliner Weisse","Best Bitter",
"Bière de Garde","Blonde Ale","Brett Beer","British Brown Ale","British Golden Ale","British Strong Ale",
"California Common ","Classic Style Smoked Beer","Clone Beer","Cream Ale","Czech Amber Lager","Czech Dark Lager",
"Czech Pale Lager","Czech Premium Pale Lager","Dark Mild","Doppelbock","Double IPA","Dunkles Bock",
"Dunkles Weissbier","Eisbock","English Barleywine","English IPA","English Porter",
"Experimental Beer","Festbier","Flanders Red Ale","Foreign Extra Stout","Fruit and Spice Beer","Fruit Beer",
"Fruit Lambic","German Helles Exportbier","German Leichtbier","German Pils","Gose","Gueuze ","Helles Bock",
"Imperial Stout","International Amber Lager","International Dark Lager","International Pale Lager",
"Irish Extra Stout","Irish Red Ale","Irish Stout","Kentucky Common","Kölsch","Lambic","Lichtenhainer",
"London Brown Ale","Märzen","Mixed-Fermentation Sour Beer","Mixed-Style Beer","Munich Dunkel","Munich Helles",
"Oatmeal Stout","Old Ale","Ordinary Bitter","Oud Bruin","Pale Kellerbier","Piwo Grodziskie",
"Pre-Prohibition Lager","Pre-Prohibition Porter","Rauchbier","Roggenbier","Sahti","Saison","Schwarzbier",
"Scottish Export","Scottish Heavy","Scottish Light","Specialty Fruit Beer","Specialty IPA - Belgian IPA",
"Specialty IPA - Black IPA","Specialty IPA - Brown IPA","Specialty IPA - Red IPA","Specialty IPA - Rye IPA",
"Specialty IPA - White IPA","Specialty Smoked Beer","Specialty Wood-Aged Beer","Spice, Herb, or Vegetable Beer",
"Strong Bitter","Sweet Stout","Trappist Single","Tropical Stout","Vienna Lager",
"Wee Heavy","Weissbier","Weizenbock","Wheatwine","Wild Specialty Beer","Winter Seasonal Beer","Witbier","Wood-Aged Beer"]

categories_list.each do |name|
	Category.create(name: name)
end

colors_list = [["Very pale/White", "#fff5b4"], 
		["Pale Gold", "#ffdc5a"], 
		["Bright Gold", "#ffbe00"],
		["Deep Gold", "#e69600"],
		["Light Amber", "#d76e00"],
		["Dark Amber", "#b45000"], 
		["Copper", "#aa3200"],
		["Red", "#8c1e00"], 
		["Auburn", "#5a1e00"], 
		["Dark Brown", "#330000"], 
		["Very Dark/Black", "#1a0000"], 
		["Other", "#ff5050"]]

colors_list.each do |name, hex|
	Color.create(name: name, hex: hex)
end