
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('happy_hours').del()
    .then(function () {
      // Inserts seed entries
      return knex('happy_hours').insert([{
        when: "Wednesday 6/6/18 4pm-7pm",
        spot: "Zeppelin Hall Biergarten",
        address: "88 Liberty View Dr, Jersey City, NJ 07305",
        specials: "$1 sliders",
        spot_url: "http://zeppelinhall.com/"
        },
        {when: "Tuesday 6/5/18 3pm-10pm",
        spot: "Orale Mexican Kitchen",
        address: "341 Grove St, Jersey City, NJ 07302",
        specials: "50% off tacos",
        spot_url: "https://www.oralemk.com/"
        },
        {when: "Monday 5pm-11pm",
        spot: "Lucky 7 Tavern",
        address: "322 Second St, Jersey City, NJ 07302",
        specials: "$.50 wings, $3 Labatt drafs, $5 Jameson shots, house Rum drinks",
        spot_url: "https://lucky7tavern.com/"}
      ]);
    });
};
