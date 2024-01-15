import {
  TagsInputContainer,
  TagsLabel,
  TagsTextInput,
} from './FormTags.styles';

const FormTagsInput = ({ tagsInput, handleTagsChange }) => (
  <TagsInputContainer className="edit-tags-container">
    <TagsLabel htmlFor="tags">Add Tags</TagsLabel>
    <TagsTextInput
      type="text"
      name="tag-input"
      id="tag-input"
      value={tagsInput}
      onChange={handleTagsChange}
    />
  </TagsInputContainer>
);

export default FormTagsInput;
