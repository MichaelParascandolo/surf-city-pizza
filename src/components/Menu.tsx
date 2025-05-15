import MenuItem from "./MenuItem";
import MenuHeader from "./MenuHeader";

const Menu = () => {
  return (
    <>
      <section className="bg-danger text-light p-2 text-center">
        <h2>Menu</h2>
        <p className="mb-0">
          Be advised that our products may contain food allergies
        </p>
        <p className="mb-0">
          Some items may not be available during the winter
        </p>
      </section>

      <section className="bg-light text-dark" id="menu">
        <div className="container text-center">
          <div className="pt-4" />
          <MenuHeader title="pizza" />
          <div className="row">
            <MenuItem name="16” Large Cheese" price="$21.85" />
            <MenuItem
              name="Grandma Pizza"
              desc="Thin crust Sicilian"
              price="$29.10"
            />
          </div>
          <hr />
          <MenuHeader title="Pizza toppings" />
          <p className="">
            <strong className="text-danger">$3.15 Each:</strong> Sausage,
            Pepperoni, Meatball, Ham, Mushroom, Peppers, Onion, Olives,
            Broccoli, Fresh Garlic, Fresh Tomatoes, Hot Peppers, and Extra
            Cheese
          </p>
          <p>
            <strong className="text-danger">$6.25 Each:</strong> Bacon,
            Eggplant, Pineapple, and Ricotta Cheese
          </p>
          <hr />
          <MenuHeader title="gourmet pizza" desc="16” Large $29.10" />
          <div className="row">
            <MenuItem
              name="Veggie"
              desc="Broccoli, ricotta, bruschetta tomatoes & Mozzarella, no sauce."
            />
            <MenuItem
              name="Margherita Pizza"
              desc="Fresh mozzarella and basil"
            />
            <MenuItem name="Buffalo Chicken" />
          </div>
          <div className="row">
            <MenuItem name="Chicken Parmigiana" />
            <MenuItem name="Bacon Chicken Ranch" />
            <MenuItem name="Hawaiian" desc="Ham, pineapple & mozzarella" />
          </div>
          <div className="row">
            <MenuItem
              name="Pizza Bianca"
              desc="Ricotta & mozzarella with or without garlic, no sauce"
            />
            <MenuItem
              name="Meat Lovers"
              desc="Sausage, pepperoni, bacon & extra cheese"
            />
            <MenuItem
              name="Surf Special"
              desc="Sausage, peppers, onions & extra cheese"
            />
          </div>
          <hr />
          <MenuHeader
            title="calzone & stromboli"
            desc="Create your own Calzone or Stromboli using the Pizza Topping List
            $3.15 Each"
          />
          <div className="row">
            <MenuItem
              name="Ricotta & Mozzarella Calzone"
              price="$25.99"
              stack={true}
            />
            <MenuItem
              name="Mozzarella & Sauce Stromboli"
              price="$21.85"
              stack={true}
            />
            <MenuItem
              name="Steak or Chicken Stromboli"
              price="$29.10"
              stack={true}
            />
          </div>
          <hr />
          <MenuHeader title="HOT SUBS" desc="Served on 12” Bread for $13.50" />
          <div className="row">
            <MenuItem name="Eggplant Parmigiana" />
            <MenuItem name="Fried Chicken Sub" />
            <MenuItem name="Grilled Chicken Sub" />
          </div>
          <div className="row">
            <MenuItem
              name="Veggie Sub"
              desc="Broccoli, tomatoes & mozzarella"
            />
            <MenuItem name="Chicken Parmigiana" />
            <MenuItem name="Meatball Parmigiana" />
            <MenuItem name="Sausage Parmigiana" />
          </div>
          <hr />
          <MenuHeader title="cold subs" desc="Served on 12” Bread for $13.50" />
          <div className="row">
            <MenuItem name="Italian Sub" desc="Ham, salami, and provolone" />
            <MenuItem name="Ham & Cheese Sub" />
            <MenuItem name="Turkey Sub" price="Add Cheese $1.05 Extra" />
          </div>
          <hr />
          <MenuHeader
            title="STEAK OR CHICKEN CHEESESTEAK"
            desc="Served on 12” Bread for $13.50"
          />
          <div className="row">
            <MenuItem name="Cheesesteak" />
            <MenuItem name="Chicken Cheesesteak" />
            <MenuItem name="Pizza Steak" />
          </div>
          <div className="row">
            <MenuItem
              name="Cheesesteak Hoagie"
              desc="Lettuce, tomatoes & onions"
            />
            <MenuItem
              name="Special Cheesesteak"
              desc="Peppers, mushrooms & onions"
            />
            <MenuItem name="Buffalo Chicken Cheesesteak" />
          </div>
          <hr />
          <MenuItem
            name="Chicken Wings"
            desc="Wings served with hot sauce and blue cheese on the side"
          />
          <div className="row">
            <MenuItem name="9 Wings" price="$14.55" />
            <MenuItem name="12 Wings" price="$18.70" />
            <MenuItem name="18 Wings" price="$27.00" />
            <MenuItem name="24 Wings" price="$35.35" />
          </div>
          <hr />
          <MenuHeader
            title="TENDERS"
            desc="Tenders served with honey mustard on the side"
          />
          <div className="row">
            <MenuItem name="6 Tenders" price="$12.49" />
            <MenuItem name="9 Tenders" price="$17.69" />
          </div>
          <div className="row">
            <MenuItem name="12 Tenders" price="$21.85" />
            <MenuItem name="18 Tenders" price="$31.20" />
            <MenuItem name="24 Tenders" price="$40.55" />
          </div>
          <hr />
          <MenuHeader
            title="wraps"
            desc="Served with a side of fries for $14.55"
          />
          <div className="row">
            <MenuItem
              name="Buffalo Chicken"
              desc="Chicken, hot sauce, blue cheese & american cheese"
            />
            <MenuItem
              name="Chicken Caesar"
              desc="Grilled chicken, romaine lettuce, tomatoes & caesar dressing"
            />
          </div>
          <div className="row">
            <MenuItem
              name="Chicken Ranch Wrap"
              desc="Breaded chicken, lettuce, tomatoes & ranch dressing"
            />
            <MenuItem
              name="Veggie Wrap"
              desc="Broccoli, bruschetta tomatoes & mozzarella"
            />
          </div>
          <hr />
          <MenuHeader title="PASTA & ENTREES" desc="Served with salad" />
          <div className="row">
            <MenuItem
              name="Spaghetti or Penne & Tomato Sauce"
              price="$14.55"
              stack={true}
            />
            <MenuItem
              name="Spaghetti or Penne & Meatball or Sausage"
              price="$18.70"
              stack={true}
            />
            <MenuItem name="Penne Alla Vodka" price="$18.70" stack={true} />
            <MenuItem
              name="Penne Alla Vodka & Chicken"
              price="$21.85"
              stack={true}
            />
          </div>
          <div className="row">
            <MenuItem
              name="Chicken Parmigiana & pasta"
              price="$22.89"
              stack={true}
            />
            <MenuItem
              name="Eggplant Parmigiana & pasta"
              price="$21.85"
              stack={true}
            />
            <MenuItem
              name="Eggplant Rollatini & pasta"
              price="$22.89"
              stack={true}
            />
            <MenuItem
              name="Mussels Marinara over Spaghetti"
              price="$21.85"
              stack={true}
            />
          </div>
          <hr />
          <MenuHeader title="APPETIZERS" desc="$16.65" />
          <div className="row">
            <MenuItem name="Mussels Marinara" desc="Hot or mild" />
            <MenuItem
              name="Eggplant Rollatini"
              desc="Stuffed eggplant with ricotta & mozzarella"
            />
            <MenuItem
              name="Fried Calamari"
              desc="Served with a side of sauce"
            />
          </div>
          <hr />
          <MenuHeader title="salad" />
          <div className="row">
            <MenuItem name="Garden Salad" desc="" price="$10.39" />
            <MenuItem
              name="Grilled, Fried, or Buffalo Chicken"
              desc=""
              price="$14.55"
            />
            <MenuItem
              name="Antipasto Salad"
              desc="Ham, salami & provolone"
              price="$14.55"
            />
          </div>
          <div className="row">
            <MenuItem
              name="Chef Salad"
              desc="Turkey & provolone"
              price="$14.55"
            />
            <MenuItem
              name="Caesar Salad"
              desc="Romaine lettuce, croutons & Romano cheese"
              price="$10.39 | $14.55 w/chicken"
            />
            <MenuItem
              name="Caprese Salad"
              desc="Fresh mozzarella, roasted peppers, tomatoes, olives and basil"
              price="$15.59"
            />
          </div>
          <hr />
          <MenuHeader title="sides" />
          <div className="row">
            <MenuItem name="Fries" price="$7.30" />
            <MenuItem name="Cheese Fries" price="$8.30" />
            <MenuItem name="Onion Rings" price="$8.30" />
          </div>
          <div className="row">
            <MenuItem name="Mozzarella Sticks (6)" price="$10.39" />
            <MenuItem name="Meatballs (3)" price="$7.30" />
            <MenuItem name="Garlic Bread" price="$7.30 | $8.30 w/cheese" />
          </div>
          <hr />
          <MenuHeader title="kids menu" />
          <h6 className="mb-5">$8.30</h6>
          <div className="row">
            <MenuItem name="Chicken Tenders & Fries" />
            <MenuItem
              name="Ziti with Sauce or Butter"
              price="$1.00 Extra for Meatball"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
