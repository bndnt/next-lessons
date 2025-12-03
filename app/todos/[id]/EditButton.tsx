'use client';
import React from 'react';
const EditButton = () => {
  const habdleEdit = () => {
    alert('Edit');
  };
  return (
    <>
      <button className="projectBtn editBtn" onClick={habdleEdit}>
        Edit
      </button>
    </>
  );
};

export default EditButton;
