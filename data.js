/**
 * Healthy Living Hub - Comprehensive Evidence-Based Data Module
 * Created by: Sanskruti Vivek Talmale, Shubham Raju Wankhede, Samiksha Sandip Taware
 */

window.HLH_DATA = {
  // Universal Medical & Emergency Disclaimers
  DISCLAIMERS: {
    standard: "This website provides general health and nutrition education. It does not replace advice from a qualified doctor, registered dietitian, or healthcare professional.",
    emergency: "Emergency notice: If you experience chest pain, severe breathlessness, dizziness, injury, or a medical emergency, please stop activity immediately and seek medical attention.",
    screeningAlert: "Before generating a plan, please note: If you are pregnant, breastfeeding, under 18, over 65, or managing conditions like diabetes, heart disease, high blood pressure, kidney disease, or an eating disorder, please consult a qualified physician or registered dietitian before making major diet or exercise changes."
  },

  // Homepage Rotating Evidence-Based Facts Carousel
  CAROUSEL_FACTS: [
    {
      id: 1,
      tag: "Movement Science",
      title: "Physical Activity Accumulates Across Short Bouts",
      body: "You do not need an uninterrupted hour in the gym. World Health Organization (WHO) and sports medicine guidelines confirm that two to three 10-minute brisk movement sessions provide substantial cardiovascular, metabolic, and mood benefits comparable to continuous sessions.",
      source: "WHO Guidelines on Physical Activity (2020)"
    },
    {
      id: 2,
      tag: "Cardiovascular Health",
      title: "Brisk Walking Counts as Moderate-Intensity Aerobic Activity",
      body: "Walking at a pace where your heart rate rises and you can talk but not sing (approximately 4.5–6.0 km/h) fulfills moderate aerobic activity goals, aiding blood pressure control, insulin sensitivity, and stamina.",
      source: "Dietary & Physical Activity Guidelines for Americans (HHS/USDA)"
    },
    {
      id: 3,
      tag: "Strength Training",
      title: "Strength Work Builds Functional Longevity, Not Instant Bulk",
      body: "Resistance exercises using bodyweight, resistance bands, or light weights do not automatically create large muscular bulk. Instead, they enhance bone mineral density, preserve joint integrity, and prevent age-related sarcopenia.",
      source: "American College of Sports Medicine (ACSM) Position Stand"
    },
    {
      id: 4,
      tag: "Mindful Nutrition",
      title: "Favorite Cultural Foods Can Fit into a Healthy Lifestyle",
      body: "Evidence-based nutrition rejects rigid black-and-white food moralizing. Traditional meals—including dals, curries, rotis, rice, and occasional treats—fit naturally into a nutritious lifestyle when balanced with fiber, vegetables, and mindful portion awareness.",
      source: "Harvard T.H. Chan School of Public Health & ICMR-NIN"
    },
    {
      id: 5,
      tag: "Hydration Biology",
      title: "Plain Water is Your Body's Ultimate Metabolic Fuel",
      body: "Commercial detox teas and extreme cleanses are unnecessary. Your liver and kidneys efficiently filter metabolic waste every second. Drinking adequate plain water, herbal teas, or infused water supports cognitive clarity, digestion, and thermoregulation safely.",
      source: "NIH National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK)"
    }
  ],

  // Homepage "Start With One Habit" Interactive Options
  STARTING_HABITS: [
    {
      id: 'veg',
      title: 'Add a Vegetable to Lunch',
      badge: 'Nutrient Density',
      icon: '🥗',
      description: 'Add a colorful portion of raw, steamed, or sautéed seasonal vegetables to your midday meal.',
      whyItWorks: 'Vegetables provide bioavailable dietary fiber, phytonutrients, and water volume. This smooths post-meal blood sugar surges and supports sustained afternoon focus.',
      actionStep: 'Keep sliced cucumbers, carrots, or a bowl of sauteed spinach/methi ready to plate alongside your main course.',
      streakLabel: 'Lunch Veggie Champion'
    },
    {
      id: 'walk',
      title: 'Take a 10-Minute Brisk Walk',
      badge: 'Circulation & Mood',
      icon: '🚶',
      description: 'Step outside or march gently in place for 10 minutes following a meal or during an afternoon lull.',
      whyItWorks: 'Post-meal light ambulation prompts skeletal muscles to uptake glucose directly without demanding excess pancreatic insulin production.',
      actionStep: 'Set a phone timer for 10 minutes right after lunch or dinner and walk at a comfortable, steady pace.',
      streakLabel: '10-Min Walk Streaker'
    },
    {
      id: 'water',
      title: 'Drink a Morning Glass of Water',
      badge: 'Cellular Hydration',
      icon: '💧',
      description: 'Sip one tall glass (250–300 ml) of room-temperature or warm water shortly after waking up.',
      whyItWorks: 'After 7–8 hours of overnight respiratory fluid loss, rehydrating replenishes blood plasma volume and stimulates digestive motility.',
      actionStep: 'Keep a covered water pitcher or bottle by your bedside or kitchen counter before heading to bed.',
      streakLabel: 'Morning Hydration Star'
    },
    {
      id: 'sleep',
      title: 'Set a Consistent Sleep Window',
      badge: 'Recovery & Hormones',
      icon: '🌙',
      description: 'Aim to shut off blue-light emitting screens and dim room lighting 30 minutes before your target bedtime.',
      whyItWorks: 'Circadian consistency stabilizes leptin and ghrelin (appetite-regulating hormones) and bolsters cellular tissue repair.',
      actionStep: 'Set a gentle "wind down" alarm 45 minutes before sleep to silence notifications and prepare a restful space.',
      streakLabel: 'Sleep Harmony Master'
    },
    {
      id: 'stretch',
      title: 'Take a 5-Minute Desk Stretch Break',
      badge: 'Spinal Mobility',
      icon: '🧘',
      description: 'Perform gentle shoulder rolls, seated spinal twists, and calf raises after every 90 minutes of desk work.',
      whyItWorks: 'Breaks down prolonged static spinal compression and alleviates tension in the trapezius, hip flexors, and lower lumbar region.',
      actionStep: 'Stand up, clasp hands overhead, inhale deeply for 4 counts, and do 5 gentle side bends.',
      streakLabel: 'Micro-Mobility Hero'
    }
  ],

  // 7-Day Meal Plans Structured by Cuisine and Dietary Pattern
  NUTRITION_PLANS: {
    // 1. Indian Vegetarian / Balanced Omnivore
    indian: [
      {
        day: 1,
        dayName: 'Monday',
        theme: 'Energizing Whole Grains & Legumes',
        breakfast: {
          name: 'Vegetable Poha with Roasted Peanuts & Lemon',
          portion: '1 medium plate (approx. 200g) + 1 boiled egg or 50g paneer cubes (optional)',
          foodGroups: ['Whole/Flattened Grains', 'Healthy Unsaturated Fats', 'Vegetables (Peas, Onions, Carrots)', 'Vitamin C'],
          prep: 'Cook flattened brown/red rice flakes with mustard seeds, curry leaves, turmeric, diced carrots, and green peas. Garnish with toasted peanuts and fresh coriander.',
          calories: 360,
          protein: '11g',
          swaps: 'Swap poha with vegetable upma, or swap peanuts with roasted sunflower seeds for nut allergies.'
        },
        lunch: {
          name: 'Homestyle Yellow Moong Dal Tadka, 2 Phulkas & Steamed Methi Subzi',
          portion: '1 bowl (180ml) dal + 2 medium whole wheat rotis + 1 cup methi-aloo or bottle gourd subzi + cucumber salad',
          foodGroups: ['Legumes/Pulses', '100% Whole Wheat', 'Dark Green Leafy Vegetables', 'Hydrating Raw Veggies'],
          prep: 'Pressure cook yellow moong dal with turmeric and tomatoes; temper with 1 tsp cold-pressed mustard oil, cumin, and garlic. Dry saute fenugreek leaves with minimal oil.',
          calories: 460,
          protein: '18g',
          swaps: 'For gluten-free: substitute wheat rotis with jowar (sorghum) or bajra bhakri. For higher protein: add 50g sprouted moong to the salad.'
        },
        dinner: {
          name: 'Comforting Moong Dal & Brown Rice Khichdi with Curd & Roasted Papad',
          portion: '1.5 cups khichdi (1:1 dal to grain ratio) + 1/2 cup fresh homemade curd (or soy yogurt) + carrot sticks',
          foodGroups: ['Complete Plant Protein (Grain + Legume)', 'Probiotic Dairy/Alternative', 'Red/Orange Beta Carotene Veggies'],
          prep: 'Cook equal measures split moong dal and soaked brown rice with diced carrots and green beans. Temper with pinch of hing (asafoetida) and cumin.',
          calories: 420,
          protein: '16g',
          swaps: 'For vegan/lactose-free: replace dairy curd with fortified unsweetened soy curd or lemon-mint infused water.'
        },
        snacks: {
          name: 'Roasted Fox Nuts (Makhana) & 1 Whole Seasonal Guava/Apple',
          portion: '1 bowl (30g) dry-roasted makhana with pinch of black pepper + 1 medium whole fruit',
          foodGroups: ['Crunchy Whole Food Snack', 'High Dietary Fiber Whole Fruit'],
          prep: 'Dry roast fox nuts in a skillet for 4 minutes with a pinch of turmeric and rock salt.',
          calories: 160,
          protein: '4g',
          swaps: 'Swap makhana with roasted chana (Bengal gram) or a handful of roasted edamame.'
        }
      },
      {
        day: 2,
        dayName: 'Tuesday',
        theme: 'Sprouts, Greens & Probiotic Nutrition',
        breakfast: {
          name: 'Sprouted Moong & Besan Chilla (Savory Gram Crepe) with Mint Chutney',
          portion: '2 medium chillas + 2 tbsp fresh coriander-mint dip + 1 cup warm spiced herbal tea',
          foodGroups: ['High-Fiber Legumes', 'Green Herbs', 'Micronutrient Dense'],
          prep: 'Blend soaked green gram sprouts and chickpea flour with grated ginger, green chillies, and ajwain. Cook on a non-stick or seasoned cast-iron pan with 1/2 tsp sesame oil.',
          calories: 340,
          protein: '15g',
          swaps: 'For soy/lentil variation: make oats and grated bottle gourd chilla.'
        },
        lunch: {
          name: 'Rajma (Red Kidney Bean) Curry with Steamed Brown Rice & Bhindi Masala',
          portion: '1 cup kidney bean curry + 1 cup cooked brown or hand-pounded rice + 1 cup spiced okra + sliced radish',
          foodGroups: ['Soluble Fiber Legumes', 'Unrefined Grain', 'Other Vegetables (Okra)', 'Cruciferous/Root Vegetables'],
          prep: 'Slow simmer soaked rajma in onion-tomato-ginger gravy. Lightly saute sliced okra with coriander powder and amchur (dry mango powder).',
          calories: 510,
          protein: '19g',
          swaps: 'Substitute rajma with black chana (kala chana) or chickpea curry if preferred.'
        },
        dinner: {
          name: 'Grilled/Pan-Seared Paneer (or Tofu) Bhurji with 2 Multigrain Rotis & Tomato Soup',
          portion: '100g crumbled low-fat paneer or firm organic tofu + 2 rotis + 1 bowl warm vegetable clear soup',
          foodGroups: ['High Quality Protein', 'Whole Grains (Wheat/Ragi/Oats)', 'Hydrating Lycopene Rich Soup'],
          prep: 'Saute onions, tomatoes, and bell peppers; fold in crumbled paneer/tofu with turmeric and kasuri methi.',
          calories: 440,
          protein: '22g',
          swaps: 'Non-veg alternative: substitute paneer with 100g minced lean chicken breast or egg bhurji.'
        },
        snacks: {
          name: 'Handful of Soaked Almonds & Walnuts + Tender Coconut Water or Lemon Water',
          portion: '5 soaked peeled almonds + 2 walnut halves + 1 glass unsweetened fresh lime water',
          foodGroups: ['Plant Omega-3 Fats', 'Electrolyte Replenishment'],
          prep: 'Soak nuts overnight in fresh water to optimize nutrient absorption.',
          calories: 140,
          protein: '4g',
          swaps: 'Nut allergy swap: pumpkin seeds and roasted sunflower seeds.'
        }
      },
      {
        day: 3,
        dayName: 'Wednesday',
        theme: 'Fermented Foods & Sustained Satiety',
        breakfast: {
          name: 'Steamed Ragi (Finger Millet) Idlis with Vegetable Sambar & Coconut Chutney',
          portion: '3 steamed idlis + 1 large bowl vegetable-loaded toor dal sambar + 1 tbsp fresh coconut chutney',
          foodGroups: ['Naturally Fermented Whole Grains', 'Calcium-Rich Millets', 'Vegetable-Rich Legume Broth'],
          prep: 'Mix fermented ragi and urad batter; steam for 10 minutes. Sambar cooked with drumsticks, pumpkin, and tomatoes.',
          calories: 380,
          protein: '13g',
          swaps: 'Substitute ragi idli with oats idli or whole moong dal steamed dhokla.'
        },
        lunch: {
          name: 'Palak Chana Dal (Spinach Lentil Stew) with 2 Jowar (Sorghum) Rotis & Spiced Curd',
          portion: '1.5 cups spinach dal + 2 jowar rotis + 1/2 cup fresh curd + sliced beetroot salad',
          foodGroups: ['Iron-Rich Dark Greens', 'Ancient Gluten-Free Millet', 'High Fiber Legumes', 'Probiotics'],
          prep: 'Cook Bengal gram (chana dal) with finely shredded fresh spinach; temper with cumin, garlic, and tomato.',
          calories: 480,
          protein: '20g',
          swaps: 'If jowar flour is unavailable, use 100% whole wheat or bajra (pearl millet) flatbread.'
        },
        dinner: {
          name: 'Mixed Vegetable & Soy Chunk Pulao with Mint Cucumber Raita',
          portion: '1.5 cups pulao + 1 cup yogurt raita + tomato wedges',
          foodGroups: ['Plant Protein Isolate (Soy)', 'Complex Carbohydrates', 'Cooling Digestive Yogurt'],
          prep: 'Boil and squeeze textured soy chunks; saute with aromatic spices, brown rice, green peas, and carrots.',
          calories: 430,
          protein: '23g',
          swaps: 'Soy allergy swap: replace soy chunks with boiled chickpeas, paneer cubes, or lean chicken.'
        },
        snacks: {
          name: 'Spiced Roasted Black Chickpea (Kala Chana) Chaat',
          portion: '1 small bowl (100g) boiled or roasted black chana tossed with chopped onions, tomatoes, and lemon juice',
          foodGroups: ['Resistant Starch', 'Digestive Plant Fiber'],
          prep: 'Toss boiled chana with chaat masala, lemon juice, and finely diced fresh vegetables.',
          calories: 170,
          protein: '8g',
          swaps: 'Swap with boiled sweet corn with lemon or roasted green peas.'
        }
      },
      {
        day: 4,
        dayName: 'Thursday',
        theme: 'Antioxidant Wealth & Lean Muscle Support',
        breakfast: {
          name: 'Warm Rolled Oats with Chia Seeds, Crushed Almonds & Diced Papaya',
          portion: '1 bowl (40g dry rolled oats cooked in water or fortified milk) + 1 tsp chia seeds + 1 cup diced papaya',
          foodGroups: ['Beta-Glucan Soluble Fiber', 'Omega-3 ALA', 'Enzyme-Rich Papaya'],
          prep: 'Simmer rolled oats in water or low-fat milk; top with chia seeds, pinch of cinnamon, and fresh ripe papaya.',
          calories: 330,
          protein: '10g',
          swaps: 'Swap oats with broken wheat (dalia) porridge or warm cooked quinoa.'
        },
        lunch: {
          name: 'Panchmel Dal (5-Lentil Protein Blend), Steamed Quinoa/Brown Rice & Lauki (Bottle Gourd) Sabzi',
          portion: '1 bowl mixed dal + 1 cup cooked brown rice or quinoa + 1 cup lauki sabzi + fresh cabbage slaw',
          foodGroups: ['Balanced Amino Acid Profile', 'Digestive Bottle Gourd', 'Cruciferous Cabbage'],
          prep: 'Cook equal parts toor, moong, masoor, chana, and urad dals. Cook bottle gourd with mild turmeric and cumin.',
          calories: 470,
          protein: '19g',
          swaps: 'Substitute 5-dal blend with any available single yellow or red lentil.'
        },
        dinner: {
          name: 'Paneer / Tofu & Vegetable Stir-Fry with 2 Methi (Fenugreek) Theplas',
          portion: '100g paneer/tofu with bell peppers & mushrooms + 2 soft theplas + mint dip',
          foodGroups: ['Complete Protein', 'Colorful Capsaicin Rich Veggies', 'Functional Fenugreek'],
          prep: 'Stir fry paneer/tofu cubes with tri-color bell peppers in 1 tsp olive or mustard oil with ginger.',
          calories: 450,
          protein: '21g',
          swaps: 'Non-veg swap: 120g grilled fish fillet (pomfret, rohu, or salmon) or skinless grilled chicken.'
        },
        snacks: {
          name: '1 Large Orange or Sweet Lime (Mosambi) + 1 tbsp Roasted Flaxseeds',
          portion: '1 whole citrus fruit (eaten as whole segments, not strained juice) + 1 tbsp seeds',
          foodGroups: ['Vitamin C Rich Whole Citrus', 'Lignans & Healthy Fats'],
          prep: 'Peel and consume the whole fruit with its nutrient-dense pulp and albedo layer.',
          calories: 130,
          protein: '3g',
          swaps: 'Swap with 1 crisp apple or 1 cup seasonal berries.'
        }
      },
      {
        day: 5,
        dayName: 'Friday',
        theme: 'Gut Health & Micronutrient Diversity',
        breakfast: {
          name: 'Vegetable Dalia (Cracked Wheat Khichdi) with Steamed Sprouts',
          portion: '1.5 cups savory dalia with beans and carrots + 1/2 cup lightly steamed sprouted moong',
          foodGroups: ['Unrefined Broken Wheat', 'Enzyme-Active Sprouts', 'Dietary Fiber'],
          prep: 'Roast cracked wheat, then pressure cook with diced French beans, green peas, carrots, ginger, and cumin.',
          calories: 350,
          protein: '14g',
          swaps: 'Gluten-free swap: millet dalia (foxtail or barnyard millet) or steel-cut gluten-free oats.'
        },
        lunch: {
          name: 'Chole (Chickpea Masala) with 2 Whole Wheat Rotis & Kachumber Salad',
          portion: '1 cup cooked chickpeas + 2 rotis + 1 bowl chopped cucumber, onion, tomato with lemon and coriander',
          foodGroups: ['Slow Digesting Chickpeas', 'Whole Grains', 'Antioxidant Salad'],
          prep: 'Cook soaked kabuli chana with tomato, tea decoction/bay leaf for rich flavor, and freshly ground spices.',
          calories: 490,
          protein: '18g',
          swaps: 'Swap chole with white vatana (dried peas) or black-eyed peas (lobia).'
        },
        dinner: {
          name: 'Grilled Vegetable & Spiced Lentil Patty (Tikki) Burger/Wrap in Whole Wheat Roti',
          portion: '2 homemade lentil & vegetable patties wrapped in a whole grain roti with shredded lettuce & yogurt dip',
          foodGroups: ['Plant Protein', 'High-Fiber Wrap', 'Cruciferous Greens'],
          prep: 'Mash boiled lentils, sweet potato, and grated cauliflower; pan-sear patties with minimal oil.',
          calories: 410,
          protein: '16g',
          swaps: 'Non-veg swap: 1 grilled lean chicken or fish patty.'
        },
        snacks: {
          name: 'Spiced Buttermilk (Chaas) with Roasted Cumin & Fresh Mint',
          portion: '1 tall glass (250ml) low-fat diluted yogurt churned with ginger, mint, rock salt, and roasted jeera',
          foodGroups: ['Hydrating Probiotic Drink', 'Digestive Spices'],
          prep: 'Whisk 3 tbsp plain yogurt with 200ml cold water, mint, and roasted cumin powder.',
          calories: 70,
          protein: '4g',
          swaps: 'Dairy-free swap: fresh coconut water with a squeeze of lime and mint.'
        }
      },
      {
        day: 6,
        dayName: 'Saturday',
        theme: 'Active Weekend Vitality & Colorful Phytochemicals',
        breakfast: {
          name: 'Multigrain Masala Dosa with Coconut Coriander Chutney & Tomato Rasam',
          portion: '1 medium crispy multigrain dosa (rice, urad dal, chana dal, ragi) with potato/sprout filling + 1 cup spicy rasam',
          foodGroups: ['Fermented Complex Carbohydrates', 'Lycopene Rich Rasam', 'Healthy Fats'],
          prep: 'Spread batter on a hot tava; fill with lightly spiced potato and sprout mash. Serve with hot herbal rasam.',
          calories: 390,
          protein: '12g',
          swaps: 'Lower carb option: Moong dal chilla with vegetable filling.'
        },
        lunch: {
          name: 'Masoor Dal (Red Lentil Stew) with 2 Rotis, Baingan Bharta (Roasted Eggplant) & Sprouted Salad',
          portion: '1 bowl masoor dal + 2 rotis + 1 cup smoky eggplant mash + mixed sprout bowl',
          foodGroups: ['Quick-Cooking Red Lentils', 'Bioactive Anthocyanin Eggplant', 'Live Sprout Enzymes'],
          prep: 'Char whole eggplant over open flame; peel and saute with onions, garlic, and tomatoes. Simmer red lentils.',
          calories: 480,
          protein: '20g',
          swaps: 'Nightshade allergy swap: replace eggplant with zucchini or bottle gourd.'
        },
        dinner: {
          name: 'Warm Vegetable Clear Soup + Quinoa / Brown Rice Khichdi with Steamed Broccoli',
          portion: '1 bowl garlic vegetable soup + 1 cup light khichdi + 1 cup steamed broccoli florets with lemon',
          foodGroups: ['Cruciferous Sulforaphane Source', 'Easily Digestible Grains', 'Restorative Broth'],
          prep: 'Steam broccoli florets for exactly 4 minutes to preserve heat-sensitive sulforaphane; toss with olive oil.',
          calories: 400,
          protein: '15g',
          swaps: 'Swap broccoli with cauliflower or green beans.'
        },
        snacks: {
          name: '1 Ripe Banana with 1 tbsp Natural Peanut or Almond Butter',
          portion: '1 medium ripe banana sliced and topped with 1 level tbsp 100% pure nut butter (no hydrogenated oils)',
          foodGroups: ['Potassium & Quick Energy', 'Satiating Monounsaturated Fats'],
          prep: 'Slice fresh banana and spread pure nut butter evenly.',
          calories: 190,
          protein: '5g',
          swaps: 'Nut allergy: use roasted sunflower seed butter or pumpkin seed butter.'
        }
      },
      {
        day: 7,
        dayName: 'Sunday',
        theme: 'Restoration, Family Flavors & Mindful Joy',
        breakfast: {
          name: 'Vegetable Stuffed Whole Wheat Paratha with Mint Curd & Tomato Salad',
          portion: '1 large paratha stuffed with grated cauliflower, carrot & paneer (cooked with 1 tsp ghee/oil) + 1/2 cup curd',
          foodGroups: ['Whole Wheat Goodness', 'Vegetable Volume', 'Complete Protein & Healthy Ghee'],
          prep: 'Roll dough stuffed with spiced grated vegetables; roast on a griddle with 1/2 tsp ghee until golden.',
          calories: 380,
          protein: '14g',
          swaps: 'For vegan: replace paneer with crumbled firm tofu; use cold-pressed oil instead of ghee.'
        },
        lunch: {
          name: 'Festive Sundar Sambar with Drumsticks, Steamed Matta/Brown Rice, Beetroot Poriyal & Curd',
          portion: '1.5 cups aromatic sambar + 1 cup brown rice + 1 cup grated coconut-beetroot stir fry + 1/2 cup curd',
          foodGroups: ['Fiber-Dense Drumsticks', 'Nitric-Oxide Rich Beetroot', 'Complex Carbohydrates'],
          prep: 'Simmer toor dal with drumsticks, pumpkin, and homemade sambar podi. Saute grated beetroot with mustard seeds and curry leaves.',
          calories: 520,
          protein: '19g',
          swaps: 'Non-veg option: 150g homestyle fish curry prepared with kokum and coconut milk.'
        },
        dinner: {
          name: 'Light Yellow Moong Dal Soup with 2 Phulkas & Steamed Ridge Gourd (Turai) Sabzi',
          portion: '1 bowl nourishing lentil soup + 2 rotis + 1 cup ridge gourd subzi + cucumber slices',
          foodGroups: ['Gentle Nighttime Digestion', 'Hydrating Ridge Gourd', 'Balanced Whole Grains'],
          prep: 'Simmer yellow moong dal until completely soft; blend or whisk with garlic and cumin. Lightly saute ridge gourd.',
          calories: 390,
          protein: '15g',
          swaps: 'Swap ridge gourd with sponge gourd, pumpkin, or zucchini.'
        },
        snacks: {
          name: 'Warm Turmeric Spiced Golden Milk (or Fortified Soy Milk) with a Pinch of Black Pepper',
          portion: '1 mug (200ml) warm milk whisked with 1/2 tsp pure turmeric, pinch of black pepper, and cardamom',
          foodGroups: ['Bioavailable Curcumin (Piperine Activated)', 'Sleep-Promoting Tryptophan'],
          prep: 'Gently heat milk; stir in turmeric and black pepper (pepper increases curcumin absorption by up to 2000%).',
          calories: 120,
          protein: '6g',
          swaps: 'Lactose-free: use unsweetened almond, oat, or soy milk.'
        }
      }
    ],

    // 2. Mediterranean & Global Balanced Variations
    mediterranean: [
      {
        day: 1,
        dayName: 'Monday',
        theme: 'Olive Oil, Legumes & Mediterranean Greens',
        breakfast: {
          name: 'Greek Yogurt (or Fortified Soy Yogurt) with Berries, Walnuts & Drizzle of Honey',
          portion: '1 bowl (180g) plain unsweetened Greek yogurt + 1/2 cup mixed berries + 4 walnut halves',
          foodGroups: ['High Protein Dairy/Alt', 'Polyphenol Rich Berries', 'Heart-Healthy Omega-3'],
          prep: 'Layer yogurt with fresh or frozen berries and crushed walnuts.',
          calories: 340,
          protein: '19g',
          swaps: 'Swap Greek yogurt with silken tofu blended with lemon juice and vanilla.'
        },
        lunch: {
          name: 'Mediterranean Chickpea & Quinoa Bowl with Kalamata Olives & Tahini Dressing',
          portion: '1 cup cooked quinoa + 1 cup cooked chickpeas + diced cucumbers, cherry tomatoes, parsley, 1 tbsp tahini',
          foodGroups: ['Plant Protein', 'Gluten-Free Grain', 'Unsaturated Sesame Fats', 'Fresh Lycopene Veggies'],
          prep: 'Toss warm quinoa with drained chickpeas, herbs, and lemon-tahini dressing.',
          calories: 490,
          protein: '18g',
          swaps: 'Substitute quinoa with farro, bulgur, or brown rice.'
        },
        dinner: {
          name: 'Baked Herb-Crusted Fish Fillet (or Tofu Steaks) with Roasted Mediterranean Vegetables',
          portion: '140g baked white fish or extra-firm tofu + 1.5 cups roasted zucchini, bell peppers, and red onions with olive oil',
          foodGroups: ['Lean Marine/Plant Protein', 'Colorful Roasted Vegetables', 'Extra Virgin Olive Oil'],
          prep: 'Season protein with oregano, garlic powder, and lemon zest; bake at 200°C for 18 minutes alongside vegetables.',
          calories: 430,
          protein: '28g',
          swaps: 'Strict vegetarian: replace fish with marinated tempeh or lentil cakes.'
        },
        snacks: {
          name: 'Whole Grain Crispbreads with Fresh Homemade Hummus & Carrot Sticks',
          portion: '2 whole rye crispbreads + 3 tbsp chickpea hummus + baby carrots',
          foodGroups: ['Whole Grain Fiber', 'Legume Dip'],
          prep: 'Spread hummus over crispbreads and enjoy with raw carrots.',
          calories: 160,
          protein: '6g',
          swaps: 'Swap rye crispbread with whole wheat pita wedges.'
        }
      }
    ]
  },

  // Weekly Grocery List Grouped into 7 Logical Categories
  GROCERY_LIST: [
    {
      category: 'Fresh Vegetables',
      icon: '🥦',
      items: [
        { name: 'Fresh Spinach / Methi (Fenugreek leaves)', note: 'Dark greens, rich in folate & carotenoids' },
        { name: 'Carrots & Beetroots', note: 'Beta-carotene, potassium, and nitric oxide precursors' },
        { name: 'Cucumbers, Tomatoes & Onions', note: 'Hydration, lycopene, and prebiotic quercetin' },
        { name: 'Bottle Gourd (Lauki) / Ridge Gourd (Turai)', note: 'High water volume, gentle digestion' },
        { name: 'Bell Peppers (Capsicum - Green/Red/Yellow)', note: 'High vitamin C concentration' },
        { name: 'Broccoli, Cauliflower or Green Cabbage', note: 'Cruciferous sulforaphane sources' },
        { name: 'French Beans & Green Peas', note: 'Dietary fiber and plant protein' }
      ]
    },
    {
      category: 'Whole Fruits',
      icon: '🍎',
      items: [
        { name: 'Apples or Pears (eaten with skin)', note: 'Rich in pectin soluble fiber' },
        { name: 'Ripe Papaya or Guava', note: 'Superior vitamin C and digestive enzymes' },
        { name: 'Citrus Fruits (Oranges, Sweet Limes / Mosambi)', note: 'Natural flavonoids, eat whole rather than juiced' },
        { name: 'Bananas', note: 'Readily available potassium and resistant starch' }
      ]
    },
    {
      category: 'Whole Grains & Millets',
      icon: '🌾',
      items: [
        { name: '100% Whole Wheat Atta / Sharbati Wheat', note: 'Contains the nutrient-dense germ and bran' },
        { name: 'Brown Rice / Hand-Pounded / Red Rice', note: 'Low glycemic index whole grain' },
        { name: 'Rolled Oats (Unsweetened, whole rolled)', note: 'Heart-healthy soluble beta-glucan fiber' },
        { name: 'Ragi (Finger Millet) / Jowar (Sorghum) Flour', note: 'High calcium and gluten-free complex carbs' },
        { name: 'Poha (Flattened rice) or Dalia (Cracked wheat)', note: 'Quick-cooking whole grain staples' }
      ]
    },
    {
      category: 'Proteins & Pulses',
      icon: '🫘',
      items: [
        { name: 'Yellow Moong Dal & Split Green Moong', note: 'Gentlest on digestion, high bioavailability' },
        { name: 'Toor Dal (Pigeon Peas) & Masoor Dal (Red Lentils)', note: 'Essential everyday homestyle protein bases' },
        { name: 'Whole Moong & Whole Black Chickpeas (Kala Chana)', note: 'Ideal for home sprouting and high-fiber chaats' },
        { name: 'Kabuli Chana (Chickpeas) & Rajma (Kidney Beans)', note: 'Slow-digesting complex carbohydrates and protein' },
        { name: 'Firm Tofu / Low-fat Paneer / Soy Chunks', note: 'Versatile calcium and protein champions' },
        { name: 'Farm Fresh Eggs / Skinless Poultry / Fresh Fish', note: 'For non-vegetarian and eggetarian plans' }
      ]
    },
    {
      category: 'Dairy & Fortified Plant Alternatives',
      icon: '🥛',
      items: [
        { name: 'Fresh Plain Curd / Greek Yogurt / Fortified Soy Yogurt', note: 'Live active probiotic cultures for microbiome' },
        { name: 'Low-fat Cow Milk or Fortified Calcium Soy/Almond Milk', note: 'Look for unsweetened options fortified with Vit D' }
      ]
    },
    {
      category: 'Pantry Staples, Healthy Fats & Seeds',
      icon: '🫒',
      items: [
        { name: 'Cold-Pressed Mustard Oil / Extra Virgin Olive Oil', note: 'Rich in monounsaturated fats (MUFA)' },
        { name: 'Flaxseeds & Chia Seeds', note: 'Plant-based alpha-linolenic acid (ALA) omega-3s' },
        { name: 'Raw Walnuts & Whole Almonds', note: 'Cognitive and endothelial health support' },
        { name: 'Cumin seeds (Jeera), Mustard seeds, Ajwain, Turmeric', note: 'Digestive spices and anti-inflammatory curcumin' },
        { name: 'Black Pepper & Hing (Asafoetida)', note: 'Enhances nutrient absorption and minimizes gas' }
      ]
    },
    {
      category: 'Healthy Extras & Snacks',
      icon: '🍵',
      items: [
        { name: 'Fox Nuts (Plain Makhana)', note: 'Low-calorie crunchy dry-roasting staple' },
        { name: 'Roasted Bengal Gram (Roasted Chana)', note: 'Convenient zero-cook protein snack on the go' },
        { name: 'Herbal Green Tea or Chamomile Tea Bags', note: 'Calming hydration free from added sugars' }
      ]
    }
  ],

  // Evidence-Based Food Prep & Budget Tips
  FOOD_PREP_TIPS: [
    {
      title: 'Batch Cooking: The "Cook Once, Eat Twice" Rule',
      icon: '🍲',
      content: 'Pressure cook a generous batch of yellow moong dal or boiled chickpeas on Sunday and Wednesday evenings. Divide half into a glass airtight container for refrigerated storage. Having a protein foundation pre-cooked eliminates 80% of dinner preparation stress.'
    },
    {
      title: 'Maximize Seasonal Produce for 40% Cost Savings',
      icon: '🥕',
      content: 'Seasonal vegetables are not only significantly more affordable, but they also contain up to twice the vitamin C and antioxidant concentration compared to off-season produce shipped across long supply chains.'
    },
    {
      title: 'Halving Food Waste in the Kitchen',
      icon: '♻️',
      content: 'Do not discard washed coriander stems, spinach stems, or vegetable peelings. Simmer them in water for 15 minutes to create an aromatic, mineral-rich vegetable stock for cooking rotis, khichdi, or soups.'
    },
    {
      title: 'Budget-Smart Nutrition: Pulses Over Expensive Powders',
      icon: '💰',
      content: 'You do not need expensive imported superfoods or specialty supplements to achieve peak health. Everyday local lentils, sprouted beans, seasonal fruits, peanuts, and sesame seeds provide complete, superior nutrition at a fraction of the cost.'
    }
  ],

  // How to Adjust This Plan Module
  ADJUSTMENT_GUIDE: [
    {
      topic: 'How to Increase or Decrease Portions Gradually',
      explanation: 'Avoid sudden drastic calorie shifts. Use the visual hand-portion method: your palm represents one portion of protein (tofu/paneer/dal/fish); your cupped hand represents complex grains; your fist represents vegetables; your thumb tip represents healthy oils or butter. To increase energy, add half a cupped hand of grains or an extra tablespoon of seeds; to reduce calories comfortably, double the vegetable fist and maintain protein.'
    },
    {
      topic: 'Adding Nourishing Snacks When Truly Hungry',
      explanation: 'If you feel physical hunger between meals, choose a "fiber + protein" pairing rather than high-sugar convenience snacks. Excellent choices: 1 apple with 1 tbsp peanut butter, 1 bowl roasted makhana with a handful of roasted chana, or a cup of spiced buttermilk with cucumber sticks.'
    },
    {
      topic: 'Swapping Foods Within the Same Food Group',
      explanation: 'Maintain balance by swapping like-for-like: swap brown rice with foxtail millet, quinoa, or whole wheat roti; swap yellow moong dal with masoor dal, rajma, or sprouted moth; swap paneer with firm tofu or edamame. This preserves your macronutrient balance while accommodating personal taste, seasonal pricing, and food intolerances.'
    },
    {
      topic: 'Understanding the Hunger & Fullness Scale (1 to 10)',
      explanation: 'Eat when you are at Level 3 (gentle hunger pangs, ready to eat) and pause when you reach Level 7 (pleasantly satisfied and energized, not sluggish or stuffed). Eating mindfully, chewing thoroughly, and placing your utensils down between bites allows natural satiety signals (cholecystokinin and peptide YY) 15–20 minutes to reach the brain.'
    }
  ],

  // Interactive Exercise Planner Library
  EXERCISES: [
    {
      id: 'brisk_walk',
      name: 'Brisk Walking / Marching in Place',
      category: 'Aerobic & Cardiovascular',
      target: 'Heart, Lungs, Calves, Quadriceps, Mood',
      purpose: 'Elevates heart rate into moderate-intensity aerobic zone (50–70% heart rate reserve), improving cardiovascular efficiency and insulin sensitivity.',
      instructions: [
        'Stand tall with eyes looking forward and shoulders relaxed back and down.',
        'Swing arms naturally in opposition to footsteps, bending elbows at roughly 90 degrees.',
        'Land gently on the heel and roll smoothly onto the ball of the foot and toes.',
        'Maintain a steady pace where you can comfortably speak in full sentences but cannot sing.'
      ],
      duration: '10 to 30 minutes continuous or accumulated in short 10-minute bouts',
      rest: 'None needed during steady-state walk',
      mistakes: 'Slouching forward, looking down at your feet, taking excessively long strides that jar knee joints.',
      easier: 'Seated marching on a sturdy chair, or walking at a leisurely recovery pace for 5 minutes at a time.',
      harder: 'Incline walking on a gentle hill, treadmill gradient of 2–4%, or brisk intervals (1 min fast, 1 min moderate).',
      safetyCue: 'Stop immediately if you experience chest tightness, dizziness, lightheadedness, or unexpected pain.'
    },
    {
      id: 'chair_squat',
      name: 'Chair Squat / Bodyweight Box Squat',
      category: 'Lower Body Strength & Functional Balance',
      target: 'Quadriceps, Gluteus Maximus, Hamstrings, Core',
      purpose: 'Builds foundational lower-body strength required for daily functional independence, standing from chairs, and climbing stairs safely.',
      instructions: [
        'Stand directly in front of a sturdy dining chair with feet shoulder-width apart, toes turned slightly outward.',
        'Extend arms forward for balance. Inhale and hinge hips backward as if sitting into the chair.',
        'Lower with control until your glutes lightly tap the chair cushion—do not collapse your weight into the chair.',
        'Press firmly through your midfoot and heels, exhale, and drive upward to full standing position.'
      ],
      duration: '2 to 3 sets of 8 to 12 repetitions',
      rest: '45 to 60 seconds between sets',
      mistakes: 'Allowing knees to cave inward past toes, lifting heels off the floor, rounding lower back.',
      easier: 'Place a firm pillow on the chair to elevate the seat height, or hold onto a sturdy kitchen counter for hand support.',
      harder: 'Full bodyweight squat without a chair, or pause for 3 seconds at the bottom hover position before standing.',
      safetyCue: 'If you feel sharp knee or hip discomfort, reduce the depth of the squat or perform seated quad extensions.'
    },
    {
      id: 'wall_pushup',
      name: 'Wall Push-Up / Incline Push-Up',
      category: 'Upper Body Strength',
      target: 'Pectoralis Major, Anterior Deltoids, Triceps, Anterior Core',
      purpose: 'Develops pressing strength and scapular stability without overloading the wrists or lumbar spine with full floor gravity.',
      instructions: [
        'Stand facing a clear wall roughly an arm’s length away. Place palms flat against the wall at chest height, slightly wider than shoulder-width.',
        'Keep body in a rigid, straight plank line from heels to ears, engaging glutes and abdomen.',
        'Inhale and bend elbows, lowering your chest toward the wall in a smooth 2-second tempo.',
        'Exhale and firmly push the wall away until arms are nearly straight (do not violently lock elbows).'
      ],
      duration: '2 to 3 sets of 10 to 15 repetitions',
      rest: '45 seconds between sets',
      mistakes: 'Arching lower back, flaring elbows out wide at 90 degrees (keep elbows angled at roughly 45 degrees like an arrow), letting hips sag.',
      easier: 'Step feet closer to the wall to lessen the incline resistance.',
      harder: 'Kitchen counter push-up (lower incline) or progressing to sturdy table or knee push-ups on a mat.',
      safetyCue: 'Keep wrists flat and neutral. Discontinue if shoulder pinching occurs.'
    },
    {
      id: 'glute_bridge',
      name: 'Floor Glute Bridge',
      category: 'Posterior Chain & Core Stability',
      target: 'Gluteal Muscles, Hamstrings, Pelvic Floor, Lower Back Stability',
      purpose: 'Re-activates dormant glute muscles caused by prolonged sitting, relieving compressive forces on the lower lumbar spine.',
      instructions: [
        'Lie comfortably on your back with knees bent and feet flat on the floor, hip-width apart, roughly 6–8 inches from your glutes.',
        'Rest arms relaxed at your sides with palms down. Draw your navel gently toward your spine.',
        'Exhale, press through your heels, and lift hips toward the ceiling until thighs and torso form a straight diagonal line.',
        'Squeeze your glutes firmly at the top for 2 seconds, then inhale and lower slowly back to the mat.'
      ],
      duration: '2 to 3 sets of 10 to 12 repetitions',
      rest: '45 seconds between sets',
      mistakes: 'Hyperextending the lower back at the top rather than driving from the hip extension, pushing from toes.',
      easier: 'Smaller range of motion, lifting hips only 3–4 inches off the floor.',
      harder: 'Single-leg glute bridge, or place a light resistance band just above the knees.',
      safetyCue: 'Maintain neck relaxed on the mat. Stop if any sharp lower back strain is felt.'
    },
    {
      id: 'bird_dog',
      name: 'Bird-Dog Core Stability',
      category: 'Core & Spinal Health',
      target: 'Multifidus, Erector Spinae, Gluteus Medius, Deltoids',
      purpose: 'One of the McGill "Big Three" evidence-based exercises for strengthening spinal stabilizers with minimal axial spinal loading.',
      instructions: [
        'Begin on all fours on a comfortable mat with hands directly under shoulders and knees directly under hips.',
        'Keep neck neutral, looking at the floor between your hands.',
        'Simultaneously reach your right arm forward and your left leg straight back until parallel to the floor.',
        'Hold the top position steadily for 3 seconds without twisting or rotating your hips.',
        'Lower smoothly and repeat on the opposite side (left arm, right leg).'
      ],
      duration: '2 sets of 6 to 8 controlled reaches per side',
      rest: '45 seconds',
      mistakes: 'Rotating hips sideways, arching back excessively, kicking leg too high.',
      easier: 'Move only the leg backward while keeping both hands on the floor, or move only one arm at a time.',
      harder: 'Add a 5-second hold at the apex with a light pulse, or draw elbow to opposite knee under torso before extending.',
      safetyCue: 'Place a soft folded towel under knees for joint cushioning if needed.'
    },
    {
      id: 'modified_plank',
      name: 'Elevated or Knee Forearm Plank',
      category: 'Isometric Core Strength',
      target: 'Transverse Abdominis, Rectus Abdominis, Shoulders, Glutes',
      purpose: 'Teaches 360-degree abdominal bracing without spinal flexion, protecting discs and improving standing posture.',
      instructions: [
        'Place forearms on a mat or against an elevated bench/couch, elbows directly under shoulders.',
        'Rest knees on the mat (or extend to toes if intermediate), maintaining a straight line from crown of head to knees/heels.',
        'Brace your stomach as if anticipating a light cough, squeeze glutes, and breathe steadily in and out through your nose.',
        'Hold position without letting your hips sag down or pike into an inverted V.'
      ],
      duration: '2 to 3 holds of 15 to 30 seconds',
      rest: '45 seconds between holds',
      mistakes: 'Holding your breath, letting hips drop, looking up and straining the cervical spine.',
      easier: 'Perform forearm plank against an elevated dining table or kitchen counter.',
      harder: 'Full toes forearm floor plank for 30–45 seconds with slow knee taps.',
      safetyCue: 'Quality always beats duration: end the set immediately when form begins to shake or lower back sags.'
    },
    {
      id: 'band_row',
      name: 'Resistance Band (or Towel) Row',
      category: 'Upper Back & Posture Correction',
      target: 'Rhomboids, Latissimus Dorsi, Posterior Deltoid, Biceps',
      purpose: 'Reverses forward-slumped desk posture by strengthening the mid-back scapular retractors.',
      instructions: [
        'Sit tall on the floor with legs extended, loop a resistance band around the arches of your feet (or anchor around a secure post).',
        'Hold handles with arms straight, chest proud, and shoulders relaxed away from ears.',
        'Exhale and pull elbows straight back along your ribcage, squeezing shoulder blades together like pinching a pencil between them.',
        'Pause for 1 second, then slowly return to the starting position over 2 seconds.'
      ],
      duration: '2 to 3 sets of 10 to 12 repetitions',
      rest: '45 seconds',
      mistakes: 'Shrugging shoulders up toward ears, leaning excessively backward to yank the band.',
      easier: 'Use a lighter resistance loop or perform doorway chest-opening rows using bodyweight.',
      harder: 'Double-up band resistance, or hold the squeezed contraction for 3 seconds per rep.',
      safetyCue: 'Ensure the band is firmly secured on feet or anchor point so it does not slip.'
    },
    {
      id: 'cat_cow_stretch',
      name: 'Cat-Cow Spinal Mobilization & Recovery',
      category: 'Flexibility & Nervous System Calming',
      target: 'Thoracic Spine, Cervical Spine, Lumbar Fascia, Breath Coordination',
      purpose: 'Restores gentle segmental mobility along the vertebral column and engages the parasympathetic calming response.',
      instructions: [
        'Start on hands and knees with neutral spine and deep belly breathing.',
        'Inhale slowly, gently drop your belly toward the floor, lift your chest, and look softly forward (Cow Pose).',
        'Exhale deeply, press through your hands, round your spine toward the ceiling, and tuck your chin gently to chest (Cat Pose).',
        'Flow smoothly between both positions following your natural respiratory rhythm.'
      ],
      duration: '8 to 10 slow breath cycles (approx. 2 minutes)',
      rest: 'None needed',
      mistakes: 'Forcing range of motion into pain, moving rapidly or jerking the neck.',
      easier: 'Perform seated in an office chair: hands on knees, arching and rounding torso.',
      harder: 'Hold Cat pose for an extra 3 seconds while focusing on deep lateral ribcage expansion.',
      safetyCue: 'Move in a comfortable pain-free range. Avoid sharp neck extension if you have cervical history.'
    },
    {
      id: 'balance_tandem',
      name: 'Tandem Stance & Single-Leg Balance (Functional Age Adaptation)',
      category: 'Balance & Fall Prevention',
      target: 'Ankle Stabilizers, Proprioception, Vestibular System',
      purpose: 'Specifically recommended for older adults and individuals wanting to strengthen balance neural pathways and reduce fall risk.',
      instructions: [
        'Stand tall next to a sturdy wall or kitchen counter for fingertip safety.',
        'Place one foot directly in front of the other so the heel of the front foot touches the toes of the back foot (Tandem Stance).',
        'Look at a stationary point ahead at eye level. Balance for 20–30 seconds. Switch foot positions.'
      ],
      duration: '2 sets of 20 to 30 seconds per side',
      rest: '30 seconds',
      mistakes: 'Closing eyes when not ready, standing far away from support structure.',
      easier: 'Semi-tandem stance (feet slightly offset side-by-side rather than strict single line).',
      harder: 'Single leg stance (lift one foot completely 2 inches off floor for 20 seconds).',
      safetyCue: 'Always keep a sturdy handhold within 2 inches of your hand.'
    }
  ],

  // Myth vs Fact Interactive Quiz (8 Questions)
  MYTHS_QUIZ: [
    {
      id: 1,
      question: "True or False: Commercial 'Detox Teas' and juice cleanses are essential to flush toxins from your liver and intestines.",
      options: [
        { text: "True — without specialized detoxes, toxins build up in your fat cells indefinitely.", isCorrect: false },
        { text: "False — your liver, kidneys, lungs, skin, and GI tract continuously detoxify your body naturally.", isCorrect: true }
      ],
      explanation: "Evidence: Clinical trials show that commercial detox teas have no scientific basis. Many contain harsh stimulants or laxatives (like senna) that cause dehydration and electrolyte imbalance. Your liver and kidneys efficiently filter metabolic waste 24 hours a day when supported by plain water and whole foods."
    },
    {
      id: 2,
      question: "True or False: Skipping meals (like breakfast or lunch) is a proven, reliable way to speed up your metabolic rate.",
      options: [
        { text: "True — skipping meals forces your body to burn fat around the clock.", isCorrect: false },
        { text: "False — chronic meal skipping often triggers intense rebound hunger, fatigue, and blood sugar swings.", isCorrect: true }
      ],
      explanation: "Evidence: Skipping meals does not accelerate metabolism. For most people, prolonged unmanaged restriction causes a drop in NEAT (daily spontaneous movement), brain fog, and subsequent overeating of high-calorie refined snacks later in the evening."
    },
    {
      id: 3,
      question: "True or False: Drinking warm lemon water or green tea burns off stubborn belly fat directly.",
      options: [
        { text: "True — citrus acid melts visceral adipose tissue.", isCorrect: false },
        { text: "False — no individual food or beverage can selectively burn fat from a specific body region.", isCorrect: true }
      ],
      explanation: "Evidence: 'Spot reduction' of body fat is a physiological myth. Fat loss occurs systemically when overall energy balance is maintained through nutrient-dense foods and physical movement. Lemon water is hydrating and refreshing, but it possesses no magical fat-melting properties."
    },
    {
      id: 4,
      question: "True or False: Lifting weights or doing resistance band exercises will make beginners or women look excessively bulky.",
      options: [
        { text: "True — any strength training immediately causes extreme muscle hypertrophy.", isCorrect: false },
        { text: "False — general strength training enhances bone density, metabolic rate, posture, and joint stability without excessive bulk.", isCorrect: true }
      ],
      explanation: "Evidence: Significant muscle hypertrophy requires years of targeted heavy progressive overload and specific caloric surpluses. For general wellness, resistance training primarily builds bone mineral density, improves insulin sensitivity, and preserves daily functional strength."
    },
    {
      id: 5,
      question: "True or False: You must exercise for at least 45 to 60 continuous minutes for physical activity to count toward health benefits.",
      options: [
        { text: "True — workouts under 30 minutes do not burn enough glycogen.", isCorrect: false },
        { text: "False — the WHO confirms that physical activity of any duration, accumulated throughout the day, confers substantial health benefits.", isCorrect: true }
      ],
      explanation: "Evidence: The updated WHO Guidelines on Physical Activity and Sedentary Behaviour removed the old requirement that activity must occur in bouts of at least 10 minutes. Every step and every 5-minute movement break counts toward cardiovascular and metabolic health."
    },
    {
      id: 6,
      question: "True or False: Carbohydrates are inherently fattening and should be completely eliminated for lifelong wellness.",
      options: [
        { text: "True — human bodies do not need any carbohydrates to thrive.", isCorrect: false },
        { text: "False — complex whole-food carbohydrates (whole grains, pulses, fruits, veggies) provide essential fiber, B-vitamins, and brain fuel.", isCorrect: true }
      ],
      explanation: "Evidence: Carbohydrates are not toxic. Whole grains, legumes, millets, fruits, and vegetables deliver dietary fiber that nourishes your gut microbiome and regulates cholesterol. Health concerns arise primarily from ultra-processed foods high in added refined sugars and trans fats."
    },
    {
      id: 7,
      question: "True or False: Workout benefits only count if you exercise at 5:00 AM before eating anything.",
      options: [
        { text: "True — dawn fasting exercise burns 300% more calories.", isCorrect: false },
        { text: "False — the best time to exercise is the time you can perform consistently, whether morning, afternoon, or evening.", isCorrect: true }
      ],
      explanation: "Evidence: Scientific studies comparing morning versus evening exercise show minimal differences in long-term health outcomes. The single most important predictor of success is adherence—choosing a time that fits your life and schedule reliably."
    },
    {
      id: 8,
      question: "True or False: Dietary supplements and multivitamin pills can safely replace a diet lacking in vegetables and whole foods.",
      options: [
        { text: "True — a high-dose multivitamin gives you everything real vegetables have.", isCorrect: false },
        { text: "False — whole foods contain a complex matrix of fiber, water, polyphenols, and trace compounds that pills cannot replicate.", isCorrect: true }
      ],
      explanation: "Evidence: Whole foods contain thousands of bioactive phytochemicals and dietary fiber working synergistically. Supplements are designed to treat diagnosed micronutrient deficiencies, not to replace the protective matrix of whole vegetables, fruits, and grains."
    }
  ],

  // Healthy Habits Score Quiz (10 Questions, Supportive Non-Judgmental)
  HABITS_QUIZ: [
    {
      id: 1,
      category: 'Nutrition Variety',
      question: 'How often do you include colorful vegetables or whole fruits with your main meals?',
      options: [
        { label: 'Most meals (2–3 times daily)', score: 3 },
        { label: 'About once a day', score: 2 },
        { label: 'A few times a week', score: 1 },
        { label: 'Rarely / Almost never', score: 0 }
      ]
    },
    {
      id: 2,
      category: 'Hydration',
      question: 'What is your primary go-to beverage when you are thirsty during the day?',
      options: [
        { label: 'Plain water, infused water, or unsweetened herbal teas', score: 3 },
        { label: 'Mostly water, with occasional soda or sweetened chai/coffee', score: 2 },
        { label: 'Frequent packaged fruit juices or energy drinks', score: 1 },
        { label: 'I often forget to drink until I feel parched or fatigued', score: 0 }
      ]
    },
    {
      id: 3,
      category: 'Aerobic Movement',
      question: 'How much moderate aerobic movement (such as brisk walking, cycling, or dancing) do you typically accumulate in a week?',
      options: [
        { label: '150 minutes or more (e.g. 25–30 mins most days)', score: 3 },
        { label: '75 to 140 minutes weekly', score: 2 },
        { label: 'Under 75 minutes per week', score: 1 },
        { label: 'Mostly sedentary / Desk-bound throughout the week', score: 0 }
      ]
    },
    {
      id: 4,
      category: 'Muscle Strength',
      question: 'Do you engage in activities that strengthen major muscle groups (bodyweight squats, resistance bands, weights, yoga, or heavy gardening)?',
      options: [
        { label: 'Yes, 2 or more days per week', score: 3 },
        { label: 'About once a week', score: 2 },
        { label: 'Occasionally a few times a month', score: 1 },
        { label: 'Rarely or never', score: 0 }
      ]
    },
    {
      id: 5,
      category: 'Sleep Quality',
      question: 'How many hours of restful, restorative sleep do you typically get per night?',
      options: [
        { label: '7 to 9 hours consistently with regular sleep timing', score: 3 },
        { label: '6 to 7 hours, occasionally inconsistent on weekends', score: 2 },
        { label: '5 to 6 hours most nights', score: 1 },
        { label: 'Less than 5 hours or frequent disrupted sleep', score: 0 }
      ]
    },
    {
      id: 6,
      category: 'Sedentary Breaks',
      question: 'When working or sitting for long hours, how often do you stand up or take a movement break?',
      options: [
        { label: 'Every 45–60 minutes for a stretch or brief stroll', score: 3 },
        { label: 'Every 2 hours or so', score: 2 },
        { label: 'Only when I need lunch or a restroom break', score: 1 },
        { label: 'I stay seated continuously for 4+ hours at a time', score: 0 }
      ]
    },
    {
      id: 7,
      category: 'Whole Grains & Fiber',
      question: 'When choosing grains (bread, rice, rotis, pasta, or breakfast cereals), how often do you choose 100% whole grains or millets?',
      options: [
        { label: 'At least half of the time or more', score: 3 },
        { label: 'About once a day', score: 2 },
        { label: 'Occasionally, but mostly refined white grains', score: 1 },
        { label: 'Almost exclusively refined white flour and white rice', score: 0 }
      ]
    },
    {
      id: 8,
      category: 'Stress Management',
      question: 'When feeling overwhelmed or stressed, how do you typically support your mental and physical recovery?',
      options: [
        { label: 'Physical walk, deep breathing, hobbies, or speaking with loved ones', score: 3 },
        { label: 'Taking quiet time or resting', score: 2 },
        { label: 'Excessive social media scrolling or snacking while distracted', score: 1 },
        { label: 'I feel perpetually on edge without healthy coping outlets', score: 0 }
      ]
    },
    {
      id: 9,
      category: 'Mindful Eating',
      question: 'How do you usually experience your main meals?',
      options: [
        { label: 'Seated, chewing unhurriedly, and noticing when I feel comfortably satisfied', score: 3 },
        { label: 'Usually mindful, though occasionally hurried on busy days', score: 2 },
        { label: 'Frequently eating in front of phones, laptops, or TVs without noticing portions', score: 1 },
        { label: 'Rushing through meals in 5 minutes while working', score: 0 }
      ]
    },
    {
      id: 10,
      category: 'Substance & Wellness Awareness',
      question: 'How do you approach alcohol, smoking, or excessive caffeinated energy drinks?',
      options: [
        { label: 'Non-smoker, rarely/moderately consume alcohol, and drink caffeine mindfully', score: 3 },
        { label: 'Moderate intake, actively working to keep limits mindful', score: 2 },
        { label: 'Occasional heavy weekends or relying on multiple energy drinks', score: 1 },
        { label: 'Daily smoking or heavy alcohol consumption', score: 0 }
      ]
    }
  ],

  // Evidence & Academic References
  REFERENCES: [
    {
      title: 'WHO Guidelines on Physical Activity and Sedentary Behaviour',
      organization: 'World Health Organization (WHO), 2020',
      summary: 'Recommends at least 150–300 minutes of moderate-intensity aerobic physical activity, or at least 75–150 minutes of vigorous-intensity aerobic physical activity, or an equivalent combination per week for adults. Recommends muscle-strengthening activities involving all major muscle groups on 2 or more days a week.',
      link: 'https://www.who.int/publications/i/item/9789240015128',
      keyPoint: 'All activity counts; doing some physical activity is better than doing none.'
    },
    {
      title: 'Dietary Guidelines for Americans (2020–2025)',
      organization: 'U.S. Department of Agriculture (USDA) & Health and Human Services (HHS)',
      summary: 'Recommends a core dietary pattern emphasizing nutrient-dense foods: dark green, red and orange vegetables; legumes (beans and peas); fruits, especially whole fruits; grains, at least half of which are whole grains; dairy and fortified alternatives; and lean protein foods.',
      link: 'https://www.dietaryguidelines.gov/',
      keyPoint: 'Focus on meeting food group needs with nutrient-dense foods and stay within calorie limits.'
    },
    {
      title: 'Health, Nutrition & Diabetes Educational Resources',
      organization: 'National Institute of Diabetes and Digestive and Kidney Diseases (NIH / NIDDK)',
      summary: 'Provides authoritative clinical science summaries on energy balance, insulin sensitivity, gastrointestinal health, and non-judgmental weight management principles.',
      link: 'https://www.niddk.nih.gov/health-information',
      keyPoint: 'Sustainable small lifestyle modifications are far more effective than short-term crash diets.'
    },
    {
      title: 'The Nutrition Source & Healthy Eating Plate',
      organization: 'Harvard T.H. Chan School of Public Health',
      summary: 'Provides a visual, evidence-based blueprint for healthy meals: 1/2 of the plate colorful vegetables and fruits, 1/4 whole grains, 1/4 healthy protein, accompanied by healthy unsaturated plant oils and water.',
      link: 'https://www.hsph.harvard.edu/nutritionsource/',
      keyPoint: 'Type of carbohydrate in the diet is more important than the exact amount of carbohydrate in the diet.'
    },
    {
      title: 'Dietary Guidelines for Indians (2024)',
      organization: 'ICMR – National Institute of Nutrition (NIN)',
      summary: 'Adapted for Indian physiology and agricultural biodiversity: emphasizes pulses, millets (jowar, bajra, ragi), diverse green leafy vegetables, seeds, safe limits on cooking oils, and traditional fermented foods.',
      link: 'https://www.nin.res.in/',
      keyPoint: 'Traditional diverse thali configurations provide balanced micronutrients when oil and refined flours are restrained.'
    }
  ],

  // Meet the Creators Information
  CREATORS: [
    {
      name: 'Sanskruti Vivek Talmale',
      role: 'Research Lead & Nutrition Strategy',
      badge: 'Nutritional Science & Dietetics',
      bio: 'Sanskruti leads evidence-based dietary research, synthesizing international clinical guidelines with culturally rich, accessible food patterns. Her focus is making balanced nutrition practical and affordable for everyday families without restrictive fads.',
      avatarColor: 'from-emerald-700 to-green-600',
      initials: 'ST'
    },
    {
      name: 'Shubham Raju Wankhede',
      role: 'Lead Full-Stack Architect & UX Designer',
      badge: 'Accessible UI & Privacy Engineering',
      bio: 'Shubham designs the technical architecture, interactive calculators, and responsive interface systems. A passionate advocate for privacy-first web design, he built Healthy Living Hub to run completely on client-side storage with zero tracking or telemetry.',
      avatarColor: 'from-teal-700 to-cyan-600',
      initials: 'SW'
    },
    {
      name: 'Samiksha Sandip Taware',
      role: 'Exercise Physiology & Wellness Educator',
      badge: 'Kinesiology & Movement Adaptation',
      bio: 'Samiksha translates sports science and functional biomechanics into safe, progressive exercise routines. She champions inclusive movement design, crafting gentle adaptations for beginners, desk workers, and older adults.',
      avatarColor: 'from-amber-600 to-orange-500',
      initials: 'ST'
    }
  ],

  SHARED_VISION: "Our mission is to democratize reliable, evidence-based nutrition and physical wellness tools—free from commercial gimmicks, extreme diets, and confusing jargon—making vibrant lifelong health accessible to every individual."
};
