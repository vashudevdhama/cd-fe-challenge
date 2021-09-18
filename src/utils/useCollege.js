import { useEffect, useState } from "react";

import { collegesData } from "../collegesData";

export default function useCollege(pageNumber) {
  const [loading, setLoading] = useState(true);
  const [colleges, setColleges] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    let { data, hasMore } = getNext10Colleges(collegesData, pageNumber);
    setColleges((colleges) => {
      return [...colleges, ...data];
    });
    setHasMore(hasMore);
    setLoading(false);
  }, [pageNumber]);

  return { loading, colleges, hasMore };
}

const getNext10Colleges = (collegesData, pageNumber) => {
  const count = 10;
  const totalColleges = collegesData.length;
  const totalPages = Math.ceil(totalColleges / count);
  let hasMore, data;
  hasMore = totalPages > pageNumber ? true : false;
  const startIndex = (pageNumber - 1) * count;
  const lastIndex = pageNumber * count;
  data = collegesData.slice(startIndex, lastIndex);

  return { data, hasMore };
};
