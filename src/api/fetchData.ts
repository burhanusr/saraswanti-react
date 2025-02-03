export interface Post {
  id: number;
  type: number;
  name: string;
  status: number;
  price: number;
  discount: number;
  attachment: number;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch(
    `https://bsby.siglab.co.id/api/test-programmer?email=bsultanrama@gmail.com`,
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const result = await response.json();
  return result.results;
};

export { fetchPosts };
