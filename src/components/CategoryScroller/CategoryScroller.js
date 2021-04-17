import React from "react";
import "./CategoryScroller.css";
import { v4 as uuid } from "uuid";

const categories = [
  {
    topic: "All",
    id: uuid(),
    route: "/categories",
  },
  {
    topic: "DSA",
    id: uuid(),
    route: "/categories/dsa",
  },
  {
    topic: "DevOps",
    id: uuid(),
    route: "/categories/devops",
  },
  {
    topic: "Cloud",
    id: uuid(),
    route: "/categories/cloud",
  },
  {
    topic: "React",
    id: uuid(),
    route: "/categories/react",
  },
  {
    topic: "JavaScript",
    id: uuid(),
    route: "/categories/javascript",
  },
  {
    topic: "Competitive Programming",
    id: uuid(),
    route: "/categories/competitive-programming",
  },
  {
    topic: "Machine Learning",
    id: uuid(),
    route: "/categories/machine-learning",
  },
  {
    topic: "Data Science",
    id: uuid(),
    route: "/categories/data-science",
  },
  {
    topic: "Blockchain",
    id: uuid(),
    route: "/categories/blockchain",
  },
  {
    topic: "Game Development",
    id: uuid(),
    route: "/categories/game-development",
  },
  {
    topic: "System Design",
    id: uuid(),
    route: "/categories/system-design",
  },
];

function CategoryScroller() {
  return (
    <div className="categoriesList">
      {categories.map((category) => {
        return (
          <p className="category__Pill" key={category.id}>
            {category.topic}
          </p>
        );
      })}
    </div>
  );
}

export default CategoryScroller;
