// import React, { useEffect, useState } from "react";

// const FeedbackList = () => {
//   const [feedbacks, setFeedbacks] = useState([]);

//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem("feedbacks")) || [];
//     setFeedbacks(stored);
//   }, []);

//   const deleteFeedback = (id) => {
//     const updated = feedbacks.filter((f) => f.id !== id);
//     localStorage.setItem("feedbacks", JSON.stringify(updated));
//     setFeedbacks(updated);
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h3>Submitted Feedback:</h3>
//       {feedbacks.length === 0 ? (
//         <p>No feedback yet.</p>
//       ) : (
//         feedbacks.map((item) => (
//           <div key={item.id} style={{ marginBottom: 10 }}>
//             <p>{item.text}</p>
//             <button onClick={() => deleteFeedback(item.id)}>Delete</button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default FeedbackList;

import React, { useEffect, useState } from "react";

const FeedbackList = () => {
  const [groupedFeedbacks, setGroupedFeedbacks] = useState({});

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("feedbacks")) || [];

    const grouped = stored.reduce((acc, item) => {
      const cat = item.category || "Uncategorized";
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(item);
      return acc;
    }, {});

    setGroupedFeedbacks(grouped);
  }, []);

  const deleteFeedback = (id, category) => {
    const updatedCategory = groupedFeedbacks[category].filter(f => f.id !== id);

    const updatedGrouped = {
      ...groupedFeedbacks,
      [category]: updatedCategory,
    };

    if (updatedCategory.length === 0) {
      delete updatedGrouped[category];
    }

    const flattened = Object.values(updatedGrouped).flat();
    localStorage.setItem("feedbacks", JSON.stringify(flattened));
    setGroupedFeedbacks(updatedGrouped);
  };

  const categories = Object.keys(groupedFeedbacks);

  return (
    <div style={{ padding: 20 }}>
      <h3>Submitted Feedback (Grouped by Category):</h3>

      {categories.length === 0 ? (
        <p>No feedback yet.</p>
      ) : (
        categories.map((category) => (
          <div key={category} style={{ marginBottom: 30 }}>
            <h4>{category}</h4>
            {groupedFeedbacks[category].map((item) => (
              <div
                key={item.id}
                style={{
                  background: "#f9f9f9",
                  padding: "10px",
                  borderRadius: "5px",
                  marginBottom: "10px",
                }}
              >
                <p>{item.text}</p>
                <button onClick={() => deleteFeedback(item.id, category)}>Delete</button>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default FeedbackList;
