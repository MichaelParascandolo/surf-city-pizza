import MenuItem from "./MenuItem";
import MenuHeader from "./MenuHeader";

function Menu() {
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
            <MenuItem name="16” Large Cheese" price="$19.99" />
            <MenuItem
              name="Grandma Pizza"
              desc="Thin crust Sicilian"
              price="$26.99"
            />
          </div>
          <hr />
          <MenuHeader title="Pizza toppings" />
          <p className="">
            <strong className="text-danger">$3 Each:</strong> Sausage,
            Pepperoni, Meatball, Ham, Mushroom, Peppers, Onion, Olives,
            Broccoli, Fresh Garlic, Fresh Tomatoes, Hot Peppers, and Extra
            Cheese
          </p>
          <p>
            <strong className="text-danger">$6 Each:</strong> Bacon, Eggplant,
            Pineapple, and Ricotta Cheese
          </p>
          <hr />
          <MenuHeader title="gourmet pizza" desc="16” Large $26.99" />
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
            $3.00 Each"
          />
          <div className="row">
            <MenuItem
              name="Ricotta & Mozzarella Calzone"
              price="$23.99"
              stack={true}
            />
            <MenuItem
              name="Mozzarella & Sauce Stromboli"
              price="$18.99"
              stack={true}
            />
            <MenuItem
              name="Steak or Chicken Stromboli"
              price="$26.99"
              stack={true}
            />
          </div>
          <hr />
          <MenuHeader title="HOT SUBS" desc="Served on 12” Bread for $11.99" />
          <div className="row">
            <MenuItem name="Eggplant Parmigiana" />
            <MenuItem
              name="Veggie Sub"
              desc="Broccoli, tomatoes & mozzarella"
            />
          </div>
          <div className="row">
            <MenuItem name="Chicken Parmigiana" />
            <MenuItem name="Meatball Parmigiana" />
            <MenuItem name="Sausage Parmigiana" />
          </div>
          <hr />
          <MenuHeader title="cold subs" desc="Served on 12” Bread for $11.99" />
          <div className="row">
            <MenuItem name="Italian Sub" desc="Ham, salami, and provolone" />
            <MenuItem name="Ham & Cheese Sub" />
            <MenuItem name="Turkey Sub" desc="Add Cheese $1 Extra" />
          </div>
          <hr />
          <MenuHeader
            title="STEAK OR CHICKEN CHEESESTEAK"
            desc="Served on 12” Bread for $11.99"
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
            <MenuItem name="9 Wings" price="$13.99" />
            <MenuItem name="12 Wings" price="$17.99" />
            <MenuItem name="18 Wings" price="$25.99" />
            <MenuItem name="24 Wings" price="$33.99" />
          </div>
          <hr />
          <MenuHeader
            title="TENDERS"
            desc="Tenders served with honey mustard on the side"
          />
          <div className="row">
            <MenuItem name="6 Tenders" price="$11.99" />
            <MenuItem name="9 Tenders" price="$16.99" />
          </div>
          <div className="row">
            <MenuItem name="12 Tenders" price="$20.99" />
            <MenuItem name="18 Tenders" price="$29.99" />
            <MenuItem name="24 Tenders" price="$38.99" />
          </div>
          <hr />
          <MenuHeader
            title="wraps"
            desc="Served with a side of fries for $13.99"
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
              price="$12.99"
              stack={true}
            />
            <MenuItem
              name="Spaghetti or Penne & Meatball or Sausage"
              price="$16.99"
              stack={true}
            />
            <MenuItem name="Penne Alla Vodka" price="$16.99" stack={true} />
            <MenuItem
              name="Penne Alla Vodka & Chicken"
              price="$19.99"
              stack={true}
            />
          </div>
          <div className="row">
            <MenuItem
              name="Chicken Parmigiana & pasta"
              price="$20.99"
              stack={true}
            />
            <MenuItem
              name="Eggplant Parmigiana & pasta"
              price="$19.99"
              stack={true}
            />
            <MenuItem
              name="Eggplant Rollatini & pasta"
              price="$20.99"
              stack={true}
            />
            <MenuItem
              name="Mussels Marinara over Spaghetti"
              price="$19.99"
              stack={true}
            />
          </div>
          <hr />
          <MenuHeader title="APPETIZERS" desc="$14.99" />
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
            <MenuItem name="Garden Salad" desc="" price="$9.99" />
            <MenuItem
              name="Grilled, Fried, or Buffalo Chicken"
              desc=""
              price="$13.99"
            />
            <MenuItem
              name="Antipasto Salad"
              desc="Ham, salami & provolone"
              price="$13.99"
            />
          </div>
          <div className="row">
            <MenuItem
              name="Chef Salad"
              desc="Turkey & provolone"
              price="$13.99"
            />
            <MenuItem
              name="Caesar Salad"
              desc="Romaine lettuce, croutons & Romano cheese"
              price="$9.99 | $13.99 w/chicken"
            />
            <MenuItem
              name="Caprese Salad"
              desc="Fresh mozzarella, roasted peppers, tomatoes, olives and basil"
              price="$14.99"
            />
          </div>
          <hr />
          <MenuHeader title="sides" />
          <div className="row">
            <MenuItem name="Fries" price="$6.99" />
            <MenuItem name="Cheese Fries" price="$7.99" />
            <MenuItem name="Onion Rings" price="$7.99" />
          </div>
          <div className="row">
            <MenuItem name="Mozzarella Sticks (6)" price="$9.99" />
            <MenuItem name="Meatballs (3)" price="$6.99" />
            <MenuItem name="Garlic Bread" price="$6.99 | $7.99 w/cheese" />
          </div>
          <hr />
          <MenuHeader title="kids menu" />
          <h6 className="mb-5">$7.99</h6>
          <div className="row">
            <MenuItem name="Chicken Tenders & Fries" />
            <MenuItem
              name="Ziti with Sauce or Butter"
              price="$7.99 | $1 Extra for Meatball"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;
