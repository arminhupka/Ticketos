import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { FaTimes } from 'react-icons/fa';
import { Container } from '../../styles/GlobalStyle';
import { firestore } from '../../services/firebase';
import Heading from '../../components/Heading/Heading';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const StyledSection = styled.section``;

const InnerContainer = styled(Container)``;

const StyledList = styled.ul`
  display: flex;
`;

const StyledItem = styled.li``;

const CategoryItem = styled.span`
  margin: 1rem;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.lightGray};
`;

const StyledIcon = styled(FaTimes)``;

const StyledButton = styled.button`
  margin-left: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  outline: none;
  transition: color 0.2s;

  :hover {
    color: #c11717;
  }
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const SubmitButton = styled(Button)`
  flex: 1;
  margin-left: 2rem;
`;

const CategoriesView = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');

  const getCategories = async () => {
    const categoriesArr = [];
    const categoriesRef = await firestore.collection('categories');
    const snapshot = await categoriesRef.get();
    snapshot.docs.map((category) => categoriesArr.push(category.data().name));
    setCategories(categoriesArr);
  };

  const removeCategory = async (e) => {
    const categoryName = e.target.closest('span').textContent;
    await firestore.collection('categories').doc(categoryName).delete();
    getCategories();
  };

  const addCategory = async (e, newCategory) => {
    e.preventDefault();
    if (!newCategory) {
      return;
    }
    await firestore.collection('categories').doc(newCategory).set({
      name: newCategory,
    });
    getCategories();
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <Helmet>
        <title>Categories | Supporteo</title>
      </Helmet>
      <StyledSection>
        <InnerContainer>
          <Heading title="Categories" />
          <StyledForm onSubmit={(e) => addCategory(e, newCategory)}>
            <Input value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
            <SubmitButton type="submit">Add category</SubmitButton>
          </StyledForm>
          <StyledList>
            {categories.map((category) => (
              <StyledItem key={category}>
                <CategoryItem>
                  {category}
                  <StyledButton onClick={removeCategory}>
                    <StyledIcon />
                  </StyledButton>
                </CategoryItem>
              </StyledItem>
            ))}
          </StyledList>
        </InnerContainer>
      </StyledSection>
    </>
  );
};

export default CategoriesView;
